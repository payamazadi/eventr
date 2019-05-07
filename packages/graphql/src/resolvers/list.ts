import { lists } from '../../mockData';
import { AuthenticationError } from 'apollo-server';

const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({});

export const listQueries = {
  list: (_, {}, {user}) => (user ? lists[1] : new AuthenticationError('must authenticate'))
};