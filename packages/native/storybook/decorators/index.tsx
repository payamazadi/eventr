import * as React from 'react';
import getTheme from '../../src/components/native-base-theme/components';
import material from '../../src/components/native-base-theme/variables/material';
import {StyleProvider, Container} from 'native-base';
import {LinearGradient} from 'expo';

export const AppDecorator = storyFn => (
  <>
    <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>{storyFn()}</Container>
    </StyleProvider>
    <LinearGradient style={styles.gradient} colors={['#3023AE', '#5B38B9', '#C86DD7']} />
  </>
);

const styles = {
  container: {
    padding: 20,
    zIndex: 1,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  gradient: {zIndex: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}
};
