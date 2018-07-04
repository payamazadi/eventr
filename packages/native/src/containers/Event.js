import React from 'react';
import {Query, Mutation, ApolloConsumer} from 'react-apollo';
import gql from 'graphql-tag';
import uuidv1 from 'uuid/v1';

import {EventDisplay, EventEdit} from '../components/pages';
import NavigationHelper, {ROUTES} from '../NavigationHelper';

export default class EventContainer extends React.Component {
  static navigationOptions = {header: null};

  render() {
    //const {params} = this.props.navigation.state;
    return (
      <Query
        query={gql`
          query GetEvent($id: Int) {
            event(id: $id) {
              name
              description
              location
              start
              end
            }
          }
        `}
        variables={{id: 0}}>
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
