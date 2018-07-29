import uuidv1 from 'uuid/v1';

import { users } from '../../mockData';
import { AuthenticationError } from 'apollo-server';

export const userQueries = {
    user: (_, { }, { user }) =>
        user
            ? users.find(u => u.authToken === user.authToken)
            : new AuthenticationError('must authenticate')
}

export const userMutations = {
    registerUser: (_, { phoneNumber }) => {
        const userIndex = users.findIndex(user => user.phoneNumber === phoneNumber);
        const registrationToken = '' + (Math.floor(Math.random() * 90000) + 10000);
        if (userIndex >= 0) {
            users[userIndex].registrationToken = registrationToken;
        } else {
            users.push({
                registrationToken,
                phoneNumber
            });
        }
        console.log(registrationToken); //@todo have this send an SMS to the phone number rather than logging the token here
        return true;
    },
    authenticateUser: (_, { phoneNumber, registrationToken }) => {
        const userIndex = users.findIndex(
            user => user.phoneNumber === phoneNumber && user.registrationToken === registrationToken
        );
        if (userIndex >= 0) {
            const authToken = uuidv1(); //@todo use a better version of uuid here
            users[userIndex].authToken = authToken;

            return authToken;
        } else {
            throw new AuthenticationError('invalid registration token');
        }
    }
}