import React from 'react';
import {StyleSheet, Image} from 'react-native';

export default props => {
  return <Image style={styles.logo} source={require('../../../assets/WeaverLogo.png')} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 132,
    marginBottom: 28,
    opacity: 0.6
  }
});
