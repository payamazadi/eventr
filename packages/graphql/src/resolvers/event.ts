import {events, users} from '../../mockData';
import { AuthenticationError } from 'apollo-server';

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

function addEvent(id="", name, description, location, start, end) {
    const event = {
        key: datastore.key(['Event']),
        data: {
            name: name,
            description: description,
            location: location,
            start:start,
            end:end
        },
    };

    if(id !== "") {
        console.log("this id" + id);
        event.key = datastore.key(['Event', id]);
    }

    // Saves the entity
    datastore
      .save(event)
      .then(() => {
        console.log(`Saved ${event.key.id}: ${event.data.description}`);
      })
      .catch(err => {
        console.error('ERROR:', err);
    });
}
export const eventQueries = {
    events: (_, { }, { user }) =>
        user
            ? events.map((event, id) => ({ id, ...event }))
            : new AuthenticationError('must authenticate'),
    event: (_, { id }, { user }) =>
        user ? events[id] && { id, ...events[id] } : new AuthenticationError('must authenticate')
}

export const eventFields = {
    author: event => users.find(u => u.phoneNumber === event.author)
}

export const eventMutations ={
    saveEvent: (
        _,
        {
            id,
            name = 'Unnamed Event',
            description,
            location,
            start,
            end
        }: {
                id: string;
                name: string;
                description: string;
                location: string;
                start: string;
                end: string;
            },
        { user }
    ) => {
        if(id === undefined) {
            addEvent("", name, description+"lolwut", location, start, end );
        } else { 
            //TODO: need to make sure we can pull the proper ID back out to send it in for the update..
            addEvent(id, name, description, location, start, end );
        }
    }
}