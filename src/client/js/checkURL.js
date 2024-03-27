const validUrl = require('valid-url');

const isValidUrl = (url) => Boolean(validUrl.isWebUri(url));

const validateURL = (url) => {
  return isValidUrl(url);
};

module.exports = { validateURL };
