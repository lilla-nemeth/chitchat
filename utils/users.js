const users = [];

const userJoin = (id, roomId, username, timestamp) => {
  const user = { id, roomId, username, timestamp };

  users.push(user);

  // console.log('users array from utils folder', users);
  return user;
};

module.exports = {
  userJoin,
};
