const { NODE_ENV } = process.env;
const isDevelopment = (!NODE_ENV || NODE_ENV !== 'production');

export default {
  log: text => isDevelopment && console.log(text),
  error: text => isDevelopment && console.error(text),
  warn: text => isDevelopment && console.warn(text),
};
