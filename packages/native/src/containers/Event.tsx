import React from 'react';
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';

import {Formik, FormikErrors} from 'formik';

import {EventDisplay, EventEdit} from '../components/pages';

export interface EventValues {
  name: String;
  description: String;
  location: String;
  start: String;
  end: String;
}

export default class EventContainer extends React.Component {
  static navigationOptions = {header: null};
  public state = {mode: MODES.VIEWING};

  render() {
    //const {params} = this.props.navigation.state;
    const id = 1;
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
        variables={{id}}>
        {({loading, data}) => {
          const {event = {}} = data;

          return (
            !loading && (
              <Formik
                initialValues={{...event}}
                onSubmit={({values, saveEvent}: {values: any; saveEvent(values: any): void}) => {
                  saveEvent(values);
                }}
                validate={(values: EventValues) => {
                  let errors: FormikErrors<EventValues> = {};
                  if (!values.name || values.name === '') {
                    errors.name = 'Required';
                  }
                  return errors;
                }}>
                {({values, errors: formErrors, isValid, setFieldValue}) => (
                  <Mutation
                    mutation={gql`
                    mutation SaveEvent(
                      $name: String!
                      $description: String
                      $location: String
                      $start: String
                      $end: String
                    ) {
                      saveEvent(
                        id:${id}
                        name: $name
                        description: $description
                        location: $location
                        start: $start
                        end: $end
                      ) {
                        name
                        description
                        location
                        start
                        end
                      }
                    }
                  `}>
                    {(saveEvent, {data: saveData}) => {
                      const isExistingEvent = event || saveData;
                      return this.state.mode === MODES.VIEWING && isExistingEvent ? (
                        <EventDisplay
                          eventData={saveData ? saveData.saveEvent : event}
                          loading={loading}
                          editButtonAction={() => this.setState({mode: MODES.EDITING})}
                        />
                      ) : (
                        <EventEdit
                          loading={loading}
                          eventData={values}
                          onFormChange={(field: string, value: any) =>
                            setFieldValue(field, value, true)
                          }
                          saveAction={() => {
                            isValid && saveEvent({variables: values});
                            this.setState({mode: MODES.VIEWING});
                          }}
                          backAction={() => this.setState({mode: MODES.VIEWING})}
                          formErrors={formErrors}
                          isExistingEvent={isExistingEvent}
                        />
                      );
                    }}
                  </Mutation>
                )}
              </Formik>
            )
          );
        }}
      </Query>
    );
  }
}

enum MODES {
  EDITING,
  VIEWING
}
