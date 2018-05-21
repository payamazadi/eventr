import React from "react";

import { EventDisplay, EventEdit } from "pages";

class EventContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { params } = this.props.navigation.state;

    return this.props.isEditingEvent || params.id === null ? (
      <EventEdit
        {...this.props}
        saveAction={() => {
          this.props.setEditingAction(false);
        }}
        backAction={() => {
          this.props.setEditingAction(false);
        }}
        onFormChange={this.props.setEventDataAction}
      />
    ) : (
      <EventDisplay
        {...this.props}
        editButtonAction={() => {
          this.props.setEditingAction(true);
        }}
      />
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
