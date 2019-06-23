import React from 'react';

import {
  StyleProvider,
  Container,
  Header,
  Content,
  Footer,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from 'native-base';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';
import {LinearGradient} from 'expo';

import getTheme from './native-base-theme/components/';
import material from './native-base-theme/variables/material';

const tabs = [
  {
    key: 'games',
    icon: 'ios-alarm',
    label: 'Games',
    barColor: '#3023AE',
    pressColor: 'rgba(255, 255, 255, 0.16)'
  },
  {
    key: 'movies-tv',
    icon: 'ios-alarm',
    label: 'Movies & TV',
    barColor: '#5B38B9',
    pressColor: 'rgba(255, 255, 255, 0.16)'
  },
  {
    key: 'music',
    icon: 'ios-alarm',
    label: 'Music',
    barColor: '#C86DD7',
    pressColor: 'rgba(255, 255, 255, 0.16)'
  }
];

const renderIcon = icon => ({isActive}) => <Icon style={{color: 'white'}} name={icon} />;

const renderTab = ({tab, isActive}) => (
  <FullTab isActive={isActive} key={tab.key} label={tab.label} renderIcon={renderIcon(tab.icon)} />
);

interface Props {
  title?: string;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
  hideNavigation?: boolean;
}

const Page = ({title, children, hideNavigation}: Props) => {
  return (
    <>
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
          <Header style={styles.header}>
            {hideNavigation ? null : (
              <>
                <Left>
                  <Button transparent>
                    <Icon name='arrow-back' style={{fontSize: 40}} />
                  </Button>
                </Left>
                <Body style={styles.headerBody}>
                  <Text style={[styles.text, styles.title]}>{title}</Text>
                </Body>
                <Right />
              </>
            )}
          </Header>
          {children}
        </Container>
      </StyleProvider>
      {hideNavigation ? null : (
        <BottomNavigation style={styles.bottomNavigation} renderTab={renderTab} tabs={tabs} />
      )}
      <LinearGradient style={styles.gradient} colors={['#3023AE', '#5B38B9', '#C86DD7']} />
    </>
  );
};

const styles = {
  text: {color: 'white'},
  title: {fontSize: 24},
  headerBody: {width: 50},
  container: {marginTop: 20, zIndex: 1, flex: 1, backgroundColor: 'transparent'},
  header: {backgroundColor: 'transparent', borderBottomColor: 'transparent', marginBottom: 8},
  bottomNavigation: {zIndex: 1, height: 80, paddingBottom: 20},
  gradient: {zIndex: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}
};

export default Page;
