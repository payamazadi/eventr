import {users} from '../../mockData';

import {eventQueries, eventFields, eventMutations} from './event';
import {userQueries, userMutations} from './user';
import {listQueries} from './list';

import {AuthenticationError} from 'apollo-server';

import Datastore from '@google-cloud/datastore';

export default {
  Query: {
    ...eventQueries,
    ...userQueries,
    ...listQueries
  },
  Event: {
    ...eventFields
  },
  Mutation: {
    ...eventMutations,
    ...userMutations
  }
};

export const contextResolver = async ({req}) => {
  const datastore = new Datastore({});
  const token = req.headers.authorization || null;

  if(token === null)
    return new AuthenticationError('must authenticate');

  const results = await datastore.runQuery(
    datastore.createQuery('User').filter('authToken', '=', token)
  );

  return {user: results[0][0]};
};
