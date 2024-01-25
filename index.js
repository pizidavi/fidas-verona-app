// React
import { AppRegistry } from 'react-native';

// App
import App from './src/App';
import { name as appName } from './app.json';
import './global.css';

AppRegistry.registerComponent(appName, () => App);
