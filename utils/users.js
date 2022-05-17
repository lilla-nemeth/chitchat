const users = [];

const userJoin = (id, roomId, username, timestamp) => {
  const user = { id, roomId, username, timestamp };

  users.push(user);

  return user;
};

const getRoomUsers = (roomId) => {
  return users.filter((user) => user.roomId === roomId);
};

const getMessageSender = (userId) => {
  return users.find((user) => user.id === userId);
};

const userLeave = (userId) => {
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports = {
  userJoin,
  getRoomUsers,
  getMessageSender,
  userLeave,
};
