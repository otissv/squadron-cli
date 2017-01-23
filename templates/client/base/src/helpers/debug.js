const toggle = true;

const debug = (data, error) => ({
  DEBUG: {
    data,
    line: error.stack.split('\n')[1].trim(),
    typeOf: typeof data,
    message: error.message,
    stack: error.stack
  }
});

export default {
  log  : (data, error) => { if (toggle) console.dir(debug(data, error)); },
  dir  : (data, error) => { if (toggle) console.dir(debug(data, error)); },
  warn : (data, error) => { if (toggle) console.warn(typeof data, data); },
  error: (data, error) => { if (toggle) console.error(typeof data, data); }
};
