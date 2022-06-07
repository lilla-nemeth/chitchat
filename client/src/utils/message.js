export const checkMessageLength = (msg, char) => {
  if (msg.length > char) {
    return msg.split('').slice(0, char).concat(['...']).join('');
  } else {
    return msg;
  }
};
