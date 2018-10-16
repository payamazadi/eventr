import {createStackNavigator} from 'react-navigation';
import Welcome from './components/Welcome'

export default createStackNavigator({
    Welcome:{
        screen: Welcome
    }
},{
    headerMode:'none'
})