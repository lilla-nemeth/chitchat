export const getCurrentUserId = (users, paramsUsername) => {
  let id;

  users.forEach((user) => {
    if (user.username === paramsUsername) {
      id = user.id;
    }
  });

  return id;
};
