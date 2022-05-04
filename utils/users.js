const users = [];

const userJoin = (id, roomId, username, timestamp) => {
  const user = users.push({
    payload: {
      id,
      roomId,
      username,
      timestamp,
    },
  });

  return user;
};

module.exports = {
  userJoin,
};
