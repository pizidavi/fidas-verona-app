// React
import { Platform } from 'react-native';

// Others
import fs from 'react-native-fs';
import { logger, consoleTransport, fileAsyncTransport, configLoggerType } from 'react-native-logs';

export const PLATFORM_STORAGE_PATH =
  Platform.OS === 'ios' ? fs.LibraryDirectoryPath : fs.ExternalDirectoryPath;

const config: configLoggerType = {
  transport: __DEV__ ? consoleTransport : fileAsyncTransport,
  enabledExtensions: ['API', 'REQUESTS', 'APP', 'BLE'],
  severity: 'debug',
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
    FS: fs,
    fileName: 'log.txt',
    filePath: PLATFORM_STORAGE_PATH,
  },
};

const log = logger.createLogger(config);
const apiLog = log.extend('API');
const appLog = log.extend('APP');

export { log, apiLog, appLog };
