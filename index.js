// Expo
import { registerRootComponent } from 'expo';

// App
import './global.css';
import './app/locales';
import App from './app/App';
import { BACKGROUND_TASK } from './app/types/enums';
import { userBackgroundTask } from './app/services/background-task';

// Others
import * as Crypto from 'expo-crypto';
import * as TaskManager from 'expo-task-manager';

// eslint-disable-next-line no-undef
global.crypto = Crypto;

TaskManager.defineTask(BACKGROUND_TASK.REFRESH_USER, userBackgroundTask);

registerRootComponent(App);
