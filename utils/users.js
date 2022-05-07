const users = [];

const userJoin = (id, roomId, username, timestamp) => {
  const user = { id, roomId, username, timestamp };

  users.push(user);

  // console.log('utils - userJoin', user);
  return user;
};

const messageSender = (userId) => {
  // TODO: fix this:
  const user = users.find((user) => user.id === userId);

  console.log('utils - messageSender', user);
  // console.log('utils - messageSender', user.id);
  // console.log('utils - messageSender-roomId', user.roomId);
  return user;
};

// console.log(users);

module.exports = {
  userJoin,
  messageSender,
};
