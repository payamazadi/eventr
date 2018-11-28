import App from './src/App';
import StorybookUI from './storybook';
import {MODE} from 'react-native-dotenv';
console.log(`Running in ${MODE} mode.`);
export default (MODE === 'storybook' ? StorybookUI : App);
