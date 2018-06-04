import React from "react";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import uuidv1 from "uuid/v1";

import GET_EVENT_QUERY from "../queries/GetEventQuery";
import ADD_EVENT_MUTATION from "../queries/AddEventMutation";

import { EventDisplay, EventEdit } from "pages";
import NavigationHelper, { ROUTES } from "../NavigationHelper";

import { View, Text } from "react-native";

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
  static navigationOptions = { header: null };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <Query query={GET_EVENT_FORM_DATA}>
        {({ data: formData, client }) => {
          if (!formData.id) {
            client.writeData({ data: { id: uuidv1() } });
          }

          return (formData && formData.isEditingEvent) ||
            !params ||
            (params && params.id === null) ? (
            <Mutation mutation={ADD_EVENT_MUTATION}>
              {(createEvent, response) => {
                console.log(response);
                return (
                  <EventEdit
                    {...this.props}
                    eventData={formData}
                    saveAction={() => {
                      createEvent({
                        variables: formData,
                        optimisticResponse: {
                          __typename: "Mutation",
                          createEvent: {
                            __typename: "Event",
                            ...formData
                          }
                        }
                      });
                      // client.writeData({
                      //   data: {
                      //     isEditingEvent: false
                      //   }
                      // });
                      //NavigationHelper.navigateTo(ROUTES.EVENT, { id });
                    }}
                    backAction={() => {}}
                    onFormChange={change => client.writeData({ data: change })}
                  />
                );
              }}
            </Mutation>
          ) : null;
          // ) : (
          //   <Query query={GET_EVENT_QUERY} variables={{ id: params.id }}>
          //     {({ loading, error, data }) => {
          //       const { getEvent: event } = data;
          //       return (
          //         <EventDisplay
          //           {...this.props}
          //           isLoadingEvent={loading}
          //           error={error}
          //           eventData={event}
          //           editButtonAction={() => {}}
          //         />
          //       );
          //     }}
          //   </Query>
          // );
        }}
      </Query>
    );
    // return this.props.isEditingEvent ||
    //   !params ||
    //   (params && params.id === null) ? (
    //   <Mutation mutation={ADD_EVENT_MUTATION}>
    //     {(createEvent, response) => {
    //       console.log(response);
    //       return (
    //         <Query query={GET_EVENT_FORM_DATA}>
    //           {({ data: formData, client }) => {
    //             return (
    //               <EventEdit
    //                 {...this.props}
    //                 eventData={formData}
    //                 saveAction={() => {
    //                   createEvent({
    //                     variables: formData,
    //                     optimisticResponse: {
    //                       __typename: "Mutation",
    //                       createEvent: {
    //                         __typename: "Event",
    //                         ...formData
    //                       }
    //                     }
    //                   });
    //                 }}
    //                 backAction={() => {}}
    //                 onFormChange={change => client.writeData({ data: change })}
    //               />
    //             );
    //           }}
    //         </Query>
    //       );
    //     }}
    //   </Mutation>
    // ) : (
    //   <Query query={GET_EVENT_QUERY} variables={{ id: 1 }}>
    //     {({ loading, error, data }) => {
    //       const { getEvent: event } = data;
    //       return (
    //         <EventDisplay
    //           {...this.props}
    //           isLoadingEvent={loading}
    //           error={error}
    //           eventData={event}
    //           editButtonAction={() => {}}
    //         />
    //       );
    //     }}
    //   </Query>
    // );
  }
}

EventContainer.defaultProps = {
  eventData: {
    name: null,
    description: null,
    location: null
  }
};
