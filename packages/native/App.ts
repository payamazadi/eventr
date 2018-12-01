import App from './src/App';
import StorybookUI from './storybook';

console.log(`Running in ${process.env['MODE']} mode.`);
export default (process.env['MODE'] === 'storybook' ? StorybookUI : App);
