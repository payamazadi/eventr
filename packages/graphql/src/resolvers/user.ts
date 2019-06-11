import uuidv1 from 'uuid/v1';

import {AuthenticationError} from 'apollo-server';

// is this the right way to do this?..
const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({});

function queryHelper(query) {
  datastore
    .runQuery(query)
    .then(results => {
      results = results[0];
      return results[0];
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

async function addUser(phoneNumber, registrationToken, authToken = '') {
  const userKey = datastore.key(['User', phoneNumber]);
  const entity = {
    key: userKey,
    data: {
      phoneNumber: datastore.int(phoneNumber),
      registrationToken: registrationToken,
      authToken: authToken
    }
  };

  await datastore.save(entity);
  console.log(`User ${phoneNumber} w reg token ${registrationToken} and auth token ${authToken} and phone ${phoneNumber} created successfully.`);
  //getting the phone number was a pain
  return { ...entity.data, "phoneNumber": entity.data.phoneNumber.value };
  
}

export const userQueries = {
  user: (_, {}, {user}) => (user ? user : new AuthenticationError('must authenticate'))
};

export const userMutations = {
  registerUser: async (_, {phoneNumber}) => {
    const registrationToken = '' + (Math.floor(Math.random() * 90000) + 10000);
    //addUser uses .save which is an upsert. So we don't need to check if the user exists already and treat it differently.
    return await addUser(phoneNumber, registrationToken);
  },

  tokenizeUser: async (_, {phoneNumber, registrationToken}) => {
    const user = queryHelper(
      datastore
        .createQuery('User')
        .filter('phoneNumber', '=', phoneNumber)
        .filter('registrationToken', '=', 'registrationToken')
    );

    if (user !== null) {
      const authToken = uuidv1(); //@todo use a better version of uuid here
      return await addUser(phoneNumber, registrationToken, authToken);
    } else {
      throw new AuthenticationError('invalid registration token');
    }
  }
};
