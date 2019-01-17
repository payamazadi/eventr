import React from 'react';
import {storiesOf} from '@storybook/react-native';
import DashboardTile from '../../src/components/DashboardTile';
import {AppDecorator} from '../decorators';
import {Text, Alert} from 'react-native';

storiesOf('DashboardTile', module)
  .addDecorator(AppDecorator)
  .add('gold', () => (
    <DashboardTile
      color='gold'
      title='Gold'
      icon='star'
      actions={{
        'Action Button': () => console.log('Action'),
        'Another Button': () => console.log('Action')
      }}>
      <Text style={{color: 'white'}}>This is a golden dashboard tile</Text>
    </DashboardTile>
  ))
  .add('blue', () => (
    <DashboardTile
      color='blue'
      title='Blue'
      icon='calendar'
      actions={{
        'Action Button': () => console.log('Action'),
        'Another Button': () => console.log('Action')
      }}>
      <Text style={{color: 'white'}}>This is a blue dashboard tile</Text>
    </DashboardTile>
  ));
