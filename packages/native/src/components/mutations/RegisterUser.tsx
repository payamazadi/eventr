import * as React from 'react';
import {ApolloError} from 'apollo-client';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

type RenderCallback = (args: RenderProps) => React.ReactNode;
export interface RenderProps {
  loading: boolean;
  error?: ApolloError;
  registerUser(registerUserInput: {variables: {phoneNumber: string}}): Promise<any>;
  called: boolean;
}

const registerUserMutation = gql`
  mutation registerUser($phoneNumber: String!) {
    registerUser(phoneNumber: $phoneNumber)
  }
`;

export default function Programs(
  props: Partial<{
    render: RenderCallback;
    children: RenderCallback;
  }>
) {
  return (
    <Mutation mutation={registerUserMutation}>
      {(registerUser, {loading, error, called}) => {
        const {render, children} = props;
        const renderProps = {
          loading,
          error,
          called,
          registerUser
        };
        return render ? render(renderProps) : children ? children(renderProps) : null;
      }}
    </Mutation>
  );
}
