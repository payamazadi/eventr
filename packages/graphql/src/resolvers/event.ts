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

function addEvent(id=0, user, name, description, location, start, end) {

    const event = {
        //TODO: shouldn't have to use user.phoneNumber as key..or convert it from int to string..
        key: datastore.key(['User', user.phoneNumber.toString(), 'Event' ]),
        data: {
            name: name,
            description: description,
            location: location,
            start:start,
            end:end
        },
    };

    if(id !== 0) {
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
    {
        // user
        //     ? events[id] && { id, ...events[id] }
        //     : new AuthenticationError('must authenticate')
        // var x = queryHelper(datastore.createQuery('Event').filter('__key__', '=', datastore.key(['User', '2406209238', 'Event', '5668600916475904' ]) ));






        const key = datastore.key(['User', 2406209238, 'Event', 5668600916475904 ]);
        // var x = datastore.get(key).then(results => {console.log(results);});
        // console.log("x: " + x);
        // if(user) {
        //     console.log("wtf");
        //     return x[0][0];
        // } else {
        //     return new AuthenticationError('must authenticate');
        // }


        var x = datastore.get(key).then(results => {
            console.log(results[0]);
            return results;
        });

        return x.resolve();
    }
}

export const eventFields = {
    // author: event => users.find(u => u.phoneNumber === event.author)
    author: event => {
        return queryHelper(datastore.createQuery('User').filter('phoneNumber', '=', event.author));
    }
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
                id: number;
                name: string;
                description: string;
                location: string;
                start: string;
                end: string;
            },
        { user }
    ) => {
        if(id === undefined) {
            id = 0;
        }
        
        //TODO: replace this hardcoded phone number with the user's id/phone
        addEvent(id, user, name, description, location, start, end );
    }
}