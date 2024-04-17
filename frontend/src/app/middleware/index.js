import io from 'socket.io-client';

// let DEBUG = true;

const socketMiddleware = (config) => {
  const socket = io(config.url);

  let arelistenersMapped = false;

  return (store) => (next) => (action) => {
    if (!arelistenersMapped) {
      config.listeners.map((listener) => {
        // listen to the action from the server
        return socket.on(listener.message, (...message) => {
          // dispatch action
          return store.dispatch(listener.action(...message));
        });
      });
      arelistenersMapped = true;
    }

    if (config.subscribers.includes(action.type)) {
      // emit action to server
      socket.emit(action.type, action.payload);
    }

    next(action);
  };
};

export default socketMiddleware;
