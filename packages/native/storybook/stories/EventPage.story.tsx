import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Event from '../../src/components/event/Event';
import {AppDecorator} from '../decorators';

storiesOf('Event', module).add('default view', () => <Event />);
