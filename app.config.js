const env = process.env.NODE_ENV || 'development';

module.exports = ({ config }) => {
  const name = getAppName(config.name);
  const packageName = getPackageName(config.android.package);
  const bundleIdentifier = getBundleIdentifier(config.ios.bundleIdentifier);

  return {
    ...config,
    name,
    android: {
      ...config.android,
      package: packageName,
    },
    ios: {
      ...config.ios,
      bundleIdentifier,
    },
  };
};

function getAppName(name) {
  if (env === 'development') {
    return `${name} (Dev)`;
  } else if (env === 'test') {
    return `${name} (Preview)`;
  }
  return name;
}

function getPackageName(packageName) {
  if (!packageName) return packageName;
  if (env === 'development') {
    return `${packageName}.dev`;
  } else if (env === 'test') {
    return `${packageName}.preview`;
  }
  return packageName;
}

function getBundleIdentifier(bundleIdentifier) {
  if (!bundleIdentifier) return bundleIdentifier;
  if (env === 'development') {
    return `${bundleIdentifier}.dev`;
  } else if (env === 'test') {
    return `${bundleIdentifier}.preview`;
  }
  return bundleIdentifier;
}
