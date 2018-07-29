import {events, users} from '../../mockData';
import { AuthenticationError } from 'apollo-server';

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
        if (events[id]) {
            const event = events[id]
            if (event.author !== user.phoneNumber) {
                throw new AuthenticationError('cannot edit another user\'s event without permission')
            }
            const updates = { id, name, description, location, start, end };
            for (let prop in updates) {
                !updates[prop] && delete updates[prop];
            }
            events[id] = { ...event, ...updates };
            return { id, ...event };
        } else {
            events.push({ name, description, location, start, end, author: user.phoneNumber });
            return { id, ...{ name, description, location, start, end } };
        }
    }
}