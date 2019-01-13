import * as React from 'react';
import {ApolloError} from 'apollo-client';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

type RenderCallback = (args: RenderProps) => React.ReactNode;
export interface RenderProps {
  loading: boolean;
  error?: ApolloError;
  createEvent(createEventInput: {variables: {name: string}}): Promise<any>;
  called: boolean;
}

const createEventMutation = gql`
  mutation createEvent($name: String!) {
    saveEvent(name: $name) {
      id
      name
    }
  }
`;

export default function CreateEvent(
  props: Partial<{
    render: RenderCallback;
    children: RenderCallback;
  }>
) {
  return (
    <Mutation mutation={createEventMutation}>
      {(createEvent, {loading, error, called}) => {
        const {render, children} = props;
        const renderProps = {
          loading,
          error,
          called,
          createEvent
        };

        return render ? render(renderProps) : children ? children(renderProps) : null;
      }}
    </Mutation>
  );
}
