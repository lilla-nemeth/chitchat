const users = [];

const joinUser = (id, roomId, username, timestamp) => {
  const user = { id, roomId, username, timestamp };

  if (id) {
    users.push(user);
  }

  return user;
};

const getRoomUsers = (roomId) => {
  return users.filter((user) => user.roomId === roomId);
};

const getMessageSender = (userId) => {
  return users.find((user) => user.id === userId);
};

const leaveUser = (userId) => {
  const index = users.findIndex((user) => user.id === userId);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports = {
  joinUser,
  getRoomUsers,
  getMessageSender,
  leaveUser,
};
