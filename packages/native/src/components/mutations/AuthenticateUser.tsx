import * as React from 'react';
import {ApolloError} from 'apollo-client';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

type RenderCallback = (args: RenderProps) => React.ReactNode;
export interface RenderProps {
  loading: boolean;
  error?: ApolloError;
  authenticateUser({variables: {phoneNumber, registrationToken}}): Promise<any>;
  called: boolean;
}

const authenticateUserMutation = gql`
  mutation authenticateUser($phoneNumber: String!, $registrationToken: String!) {
    authenticateUser(phoneNumber: $phoneNumber, registrationToken: $registrationToken)
  }
`;

export default function Programs(
  props: Partial<{
    render: RenderCallback;
    children: RenderCallback;
  }>
) {
  return (
    <Mutation mutation={authenticateUserMutation}>
      {(authenticateUser, {loading, error, called}) => {
        const {render, children} = props;
        const renderProps = {
          loading,
          error,
          called,
          authenticateUser
        };

        return render ? render(renderProps) : children ? children(renderProps) : null;
      }}
    </Mutation>
  );
}
