// Others
import { version } from './package.json';

const env = process.env.EXPO_PUBLIC_APP_ENV || 'development';

module.exports = ({ config }) => {
  return {
    ...config,
    name: getAppName(config.name),
    version,
    android: {
      ...config.android,
      package: getPackageName(config.android.package),
    },
    ios: {
      ...config.ios,
      bundleIdentifier: getBundleIdentifier(config.ios.bundleIdentifier),
    },
  };
};

/**
 * @param {string} name
 */
function getAppName(name) {
  if (env === 'development') {
    return `${name} (Dev)`;
  } else if (env === 'preview') {
    return `${name} (Preview)`;
  }
  return name;
}

/**
 * @param {string | undefined} packageName
 */
function getPackageName(packageName) {
  if (!packageName) return packageName;
  if (env === 'development') {
    return `${packageName}.dev`;
  } else if (env === 'preview') {
    return `${packageName}.preview`;
  }
  return packageName;
}

/**
 * @param {string | undefined} bundleIdentifier
 */
function getBundleIdentifier(bundleIdentifier) {
  if (!bundleIdentifier) return bundleIdentifier;
  if (env === 'development') {
    return `${bundleIdentifier}.dev`;
  } else if (env === 'preview') {
    return `${bundleIdentifier}.preview`;
  }
  return bundleIdentifier;
}
