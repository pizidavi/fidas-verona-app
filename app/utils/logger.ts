// Others
import { configLoggerType, logger } from 'react-native-logs';

const config: configLoggerType = {
  enabledExtensions: ['API', 'APP'],
  severity: 'debug',
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};

const log = logger.createLogger(config);
const apiLog = log.extend('API');
const appLog = log.extend('APP');

export { log, apiLog, appLog };
