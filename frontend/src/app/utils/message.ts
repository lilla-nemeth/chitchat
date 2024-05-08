import { Message as MessageType } from '../types/reduxTypes';

export const checkMessageLength = (msg: MessageType['selectedMessageMsg'], char: number) => {
	if (msg && msg.length > char) {
		return msg.split('').slice(0, char).concat(['...']).join('');
	} else {
		return msg;
	}
};
