import { events } from '../../mockData';
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

async function addEvent(id=0, user, name, description, location, start, end) {

    const event = {
        // key: datastore.key(['User', user.phoneNumber.toString(), 'Event' ]),
        key: datastore.key('Event'),
        data: {
            name: name,
            description: description,
            location: location,
            start:start,
            end:end,
            author: user.phoneNumber
        },
    };

    if(id !== 0) {
        event.key = datastore.key(['Event', id]);
    }

    await datastore.save(event);

    return { id: event.key.id, ...event.data };
}
export const eventQueries = {
    events: (_, { }, { user }) =>
        user
            ? events.map((event, id) => ({ id, ...event }))
            : new AuthenticationError('must authenticate'),
    event: async (_, { id }, { user }) =>
    {
        // user
        //     ? events[id] && { id, ...events[id] }
        //     : new AuthenticationError('must authenticate')
        // var x = queryHelper(datastore.createQuery('Event').filter('__key__', '=', datastore.key(['User', '2406209238', 'Event', '5668600916475904' ]) ));

        if (!user) {
            return new AuthenticationError('must authenticate');
        }

        const key = datastore.key(['User', user.phoneNumber, 'Event', 5668600916475904 ]);
        const data = await datastore.get(key);
        const ret = data[0];

        console.log(ret);
        return {id: id, ...ret};
    }
}

export const eventFields = {
    // author: event => users.find(u => u.phoneNumber === event.author)
    author: event => {
        return queryHelper(datastore.createQuery('User').filter('phoneNumber', '=', event.author));
    }
}

export const eventMutations ={
    saveEvent: async (
        _,
        {
            id,
            name = 'Unnamed Event',
            author,
            description,
            location,
            start,
            end
        }: {
                id: number;
                name: string;
                author: number;
                description: string;
                location: string;
                start: string;
                end: string;
            },
        { user }
    ) => {
        if(!user) { 
            return new AuthenticationError('must authenticate');
        }
        if(id === undefined) {
            id = 0;
        }
        
        //TODO: replace this hardcoded phone number with the user's id/phone
        var x = await addEvent(id, user, name, description, location, start, end );
        console.log("Added " + x);
        return x;
    }
}