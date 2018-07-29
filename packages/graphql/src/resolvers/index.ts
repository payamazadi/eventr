import { users } from '../../mockData';

import {eventQueries, eventFields, eventMutations} from './event';
import { userQueries, userMutations} from './user'

export default {
  Query: {
    ...eventQueries,
    ...userQueries
  },
  Event:{
    ...eventFields
  },
  Mutation: {
    ...eventMutations,
    ...userMutations
  }
};

export const contextResolver = ({req}) => {
  const token = req.headers.authorization || '';

  const user = users.find(user => user.authToken === token);

  return {user};
};
