import {createStackNavigator} from 'react-navigation';
import Welcome from './components/registration/WelcomeContainer';
import Confirmation from './components/registration/ConfirmationContainer';
import RegistrationComplete from './components/registration/RegistrationCompleteContainer';

export default createStackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    Confirmation: {
      screen: Confirmation
    },
    RegistrationComplete: {
      screen: RegistrationComplete
    }
  },
  {
    headerMode: 'none'
  }
);
