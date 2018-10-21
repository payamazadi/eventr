import {users} from '../../mockData';

import {eventQueries, eventFields, eventMutations} from './event';
import {userQueries, userMutations} from './user';

import Datastore from '@google-cloud/datastore';

export default {
  Query: {
    ...eventQueries,
    ...userQueries
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
  const token = req.headers.authorization || '';
  const results = await datastore.runQuery(
    datastore.createQuery('User').filter('authToken', '=', token)
  );

  return {user: results[0][0]};
};
