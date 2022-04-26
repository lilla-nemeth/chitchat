import Sugar from 'sugar';

// sugar date format
export const createTimestamp = (formatString) => {
	const formattedDate = Sugar.Date.format(new Date(), formatString);
	return formattedDate;
};

// scroll to the latest message
export const scrollToBottom = (ref) => {
	ref.current?.scrollIntoView({ behavior: 'smooth' });
};

// convert redux action objects to array
// export const changeActionType = (message) => {
//   const messageArray = [];

//   for (let value in message) {
//     messageArray.push(message[value]);
//   }

//   return messageArray;
// };
