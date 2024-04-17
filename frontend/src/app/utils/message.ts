export const checkMessageLength = (msg: string, char: number) => {
	if (msg.length > char) {
		return msg.split('').slice(0, char).concat(['...']).join('');
	} else {
		return msg;
	}
};
