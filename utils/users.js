const users = [];

const userJoin = (id, roomId, username, timestamp) => {
  const user = { id, roomId, username, timestamp };

  users.push(user);

  return user;
};

const getRoomUsers = (room) => {
  return users.filter((user) => user.roomId === room);
};

const getMessageSender = (userId) => {
  return users.find((user) => user.id === userId);
};

module.exports = {
  userJoin,
  getRoomUsers,
  getMessageSender,
};
