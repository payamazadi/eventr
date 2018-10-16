import React from 'react'

import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { Container, Header, Content, Footer, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'
import { LinearGradient } from 'expo';

const tabs = [
    {
        key: 'games',
        icon: 'ios-alarm-outline',
        label: 'Games',
        barColor: '#3023AE',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
        key: 'movies-tv',
        icon: 'ios-alarm-outline',
        label: 'Movies & TV',
        barColor: '#5B38B9',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
        key: 'music',
        icon: 'ios-alarm-outline',
        label: 'Music',
        barColor: '#C86DD7',
        pressColor: 'rgba(255, 255, 255, 0.16)'
    }
]

const renderIcon = icon => ({ isActive }) => (
    <Icon  style={{color:'white'}} name={icon} />
)

const renderTab = ({ tab, isActive }) => (
    <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={renderIcon(tab.icon)}
    />
)
const Welcome = ({navigation}:NavigationInjectedProps) => {
    console.log(navigation.state)
    return <>
        
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.text}>Header</Title>
                    </Body>
                    <Right></Right>
                </Header>
            <Content><Body><Text style={styles.text}>Hello app</Text></Body></Content>
            

            </Container>
        
        <BottomNavigation
            style={styles.bottomNavigation}
            renderTab={renderTab}
            tabs={tabs}
        />
        <LinearGradient style={styles.gradient} colors={["#3023AE", "#5B38B9", "#C86DD7"]} />
    </>}

const styles = {
    text: {color:"white"},
    container: { zIndex: 1, backgroundColor: 'transparent' },
    header: {backgroundColor: 'transparent', borderBottomColor: "transparent" },
    bottomNavigation: { zIndex: 1, height: 80, paddingBottom: 20 },
    gradient: { zIndex: 0, position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }
};

  export default withNavigation(Welcome)