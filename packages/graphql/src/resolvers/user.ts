import uuidv1 from 'uuid/v1';

import {users} from '../../mockData';
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

function addUser(phoneNumber, registrationToken, authToken = '') {
  const userKey = datastore.key(['User', phoneNumber]);
  const entity = {
    key: userKey,
    data: {
      phoneNumber: datastore.int(phoneNumber),
      registrationToken: registrationToken,
      authToken: authToken
    }
  };

  datastore
    .save(entity)
    .then(() => {
      console.log(
        `User ${phoneNumber} w reg token ${registrationToken} and auth token ${authToken} created successfully.`
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

// export const userQueries = {
//     user: (_, { }, { user }) => {
//         // user
//         //     ?
//         //
//         //     :
//         console.log(typeof(user));
//         console.log(user);
//         if(user){
//             console.log(user.authToken);
//             return queryHelper(datastore.createQuery('User').filter('authToken', '=', user.authToken));
//         } else {
//             return new AuthenticationError('must authenticate');
//         }
//     }
// }
export const userQueries = {
  user: (_, {}, {user}) => (user ? user : new AuthenticationError('must authenticate'))
};

export const userMutations = {
  registerUser: (_, {phoneNumber}) => {
    const registrationToken = '' + (Math.floor(Math.random() * 90000) + 10000);
    //addUser uses .save which is an upsert. So we don't need to check if the user exists already and treat it differently.
    addUser(phoneNumber, registrationToken);
    //@todo have this send an SMS to the phone number rather than logging the token here
    return true;
  },
  authenticateUser: (_, {phoneNumber, registrationToken}) => {
    const user = queryHelper(
      datastore
        .createQuery('User')
        .filter('phoneNumber', '=', phoneNumber)
        .filter('registrationToken', '=', 'registrationToken')
    );
    // Index = users.findIndex(
    //     user => user.phoneNumber === phoneNumber && user.registrationToken === registrationToken
    // );

    if (user !== null) {
      const authToken = uuidv1(); //@todo use a better version of uuid here
      addUser(phoneNumber, '', authToken);
      return authToken;
    } else {
      throw new AuthenticationError('invalid registration token');
    }
  }
};
