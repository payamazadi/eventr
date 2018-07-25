import React from 'react';

import FontAwesome, {Icons} from 'react-native-fontawesome';
import NavigationHelper, {ROUTES} from '../NavigationHelper';
import {Drawer} from '../wrappers/';

import {TextRegular} from '../text/';

import {SubmitButton} from '../inputs/';

class NavigationDrawer extends React.Component {
  render() {
    return (
      <Drawer open={this.props.isDrawerOpen}>
        <TextRegular>
          <FontAwesome>{Icons.dashboard}</FontAwesome>
          Dashboard
        </TextRegular>
        <SubmitButton
          onPress={() => {
            this.props.closeDrawerAction();
            NavigationHelper.navigateTo(ROUTES.WELCOME);
          }}>
          other page
        </SubmitButton>
        <SubmitButton
          onPress={() => {
            this.props.closeDrawerAction();
          }}>
          Close the Drawer
        </SubmitButton>
      </Drawer>
    );
  }
}
