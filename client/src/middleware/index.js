import io from 'socket.io-client';

let DEBUG = false;

const socketMiddleware = (config) => {
  const socket = io(config.url);

  let arelistenersMapped = false;
  let areSubscribersMapped = false;

  return (store) => (next) => (action) => {
    if (!arelistenersMapped) {
      config.listeners.map((listener) => {
        // listen to the action from the server
        socket.on(listener.message, (...message) => {
          // // dispatch the action
          // if (DEBUG) console.log(listener.action(...message));
          store.dispatch(listener.action(...message));
        });
      });

      arelistenersMapped = true;
    }

    if (!areSubscribersMapped) {
      config.subscribers.map((subscriber) => {
        if (subscriber.type.includes(action.type)) {
          // emit action to the server
          socket.emit(subscriber.message, action.payload);
          // if (DEBUG) console.log(subscriber.message, action.payload);
        }
      });

      areSubscribersMapped = true;
    }

    next(action);
  };
};

export default socketMiddleware;
