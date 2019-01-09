import React from 'react';
import {storiesOf} from '@storybook/react-native';
import RegistrationComplete from '../../src/components/registration/RegistrationComplete';
import {FontDecorator} from '../decorators';

storiesOf('RegistrationComplete', module)
  .addDecorator(FontDecorator)
  .add('default view', () => <RegistrationComplete handleSubmit={() => {}} />);
