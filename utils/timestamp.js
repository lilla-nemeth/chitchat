const Sugar = require('sugar');

// sugar date format
const createTimestamp = (formatString) => {
  const formattedDate = Sugar.Date.format(new Date(), formatString);
  return formattedDate;
};

module.exports = { createTimestamp };
