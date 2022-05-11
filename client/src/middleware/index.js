import io from 'socket.io-client';
import * as types from '../constants/actionTypes';

let DEBUG = true;

const socketMiddleware = (config) => {
  const socket = io(config.url);

  let arelistenersMapped = false;
  let areSubscribersMapped = false;

  return (store) => (next) => (action) => {
    if (!arelistenersMapped) {
      config.listeners.map((listener) => {
        // listen to the action from the server
        socket.on(listener.message, (...message) => {
          // dispatch action
          store.dispatch(listener.action(...message));
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
