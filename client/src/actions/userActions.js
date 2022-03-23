export const joinUser = (socketId, roomId, username, timestamp) => {
  return {
    type: 'JOIN_USER',
    payload: {
      socketId,
      roomId,
      username,
    },
    meta: {
      timestamp,
    },
  };
};

export const getUser = (socketId) => {
  return {
    type: 'GET_USER',
    payload: {
      socketId,
    },
  };
};

export const userLeave = (socketId) => {
  return {
    type: 'USER_LEAVE',
    payload: {
      socketId,
    },
  };
};

export const getRoomUsers = (roomId) => {
  return {
    type: 'GET_ROOM_USERS',
    payload: {
      roomId,
    },
  };
};
