import React from 'react';
import {Query, Mutation, ApolloConsumer} from 'react-apollo';
import gql from 'graphql-tag';
import uuidv1 from 'uuid/v1';

import GET_EVENT_QUERY from '../queries/GetEventQuery';
import ADD_EVENT_MUTATION from '../queries/AddEventMutation';

import {EventDisplay, EventEdit} from 'pages';
import NavigationHelper, {ROUTES} from '../NavigationHelper';

const GET_EVENT_FORM_DATA = gql`
  {
    id @client
    name @client
    description @client
    location @client
    start @client
    end @client
    isEditingEvent @client
  }
`;

export default class EventContainer extends React.Component {
  static navigationOptions = {header: null};

  render() {
    //const {params} = this.props.navigation.state;
    return (
      <Query
        query={gql`
          {
            event {
              name
              description
              location
              start
              end
            }
          }
        `}>
        {({data}) => {
          console.log(data);
          const {event = {}} = data;
          return <EventDisplay eventData={event} />;
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
