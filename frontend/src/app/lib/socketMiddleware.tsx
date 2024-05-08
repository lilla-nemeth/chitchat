import { Middleware } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import { RootState } from '../types/reduxTypes';
import { SocketConfig } from '../types/socketTypes';

const socketMiddleware = (config: SocketConfig): Middleware<RootState> => {
	const socket = io(config.url);
	let areListenersMapped = false;

	return (store) => (next) => (action: any) => {
		if (!areListenersMapped) {
			config.listeners.forEach((listener) => {
				socket.on(listener.message, (message: string) => {
					return store.dispatch(listener.action(message));
				});
			});
			areListenersMapped = true;
		}
		if (config.subscribers.includes(action.type)) {
			socket.emit(action.type, action.payload);
		}

		next(action);
	};
};

export default socketMiddleware;
