import React from "react";
import { Query, Mutation } from "react-apollo";
import GET_EVENT_QUERY from "../queries/GetEventQuery";
import ADD_EVENT_MUTATION from "../queries/AddEventMutation";

import { EventDisplay, EventEdit } from "pages";

export default class EventContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { params } = this.props.navigation.state;

    // return this.props.isEditingEvent || params.id === null ? (
    return false ? (
      <Mutation mutation={ADD_EVENT_MUTATION}>
        {(addEvent, { data }) => (
          <EventEdit
            {...this.props}
            saveAction={() => {}}
            backAction={() => {}}
          />
        )}
      </Mutation>
    ) : (
      <Query query={GET_EVENT_QUERY} variables={{ id: 1 }}>
        {({ loading, error, data }) => {
          const { getEvent: event } = data;
          return (
            <EventDisplay
              {...this.props}
              isLoadingEvent={loading}
              error={error}
              eventData={event}
              editButtonAction={() => {}}
            />
          );
        }}
      </Query>
    );
  }
}

EventContainer.defaultProps = {
  eventData: {
    name: null,
    description: null,
    location: null
  }
};
