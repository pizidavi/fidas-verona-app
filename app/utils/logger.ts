// Others
import { consoleTransport, logger } from 'react-native-logs';

const log = logger.createLogger({
  transport: consoleTransport,
  enabledExtensions: ['API', 'APP'],
  severity: 'debug',
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
});
const apiLog = log.extend('API');
const appLog = log.extend('APP');

export { log, apiLog, appLog };
