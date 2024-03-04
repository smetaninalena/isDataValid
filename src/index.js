// isDataValid.js

const isDataValid = {
  isString: (value) => {
    return typeof value === 'string';
  },

  isNumber: (value) => {
    return typeof value === 'number' && !isNaN(value);
  },

  isEmail: (value) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  isDate: (value) => {
    // Basic date validation using Date object
    return !isNaN(Date.parse(value));
  }
};

module.exports = isDataValid;
