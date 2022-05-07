import io from 'socket.io-client';

const socketMiddleware = (config) => {
  const socket = io(config.url);

  let arelistenersMapped = false;
  let areSubscribersMapped = false;

  return (store) => (next) => (action) => {
    if (!arelistenersMapped) {
      config.listeners.map((listener) => {
        // 2. listen to the action from the server
        socket.on(listener.message, (message) => {
          // 3. dispatch the action
          store.dispatch(listener.action(message));
        });
      });

      arelistenersMapped = true;
    }

    if (!areSubscribersMapped) {
      config.subscribers.map((subscriber) => {
        if (subscriber.type.includes(action.type)) {
          // 1. emit action to the server
          socket.emit(subscriber.message, action.payload);
        }
      });

      areSubscribersMapped = true;
    }

    next(action);
  };
};

export default socketMiddleware;
