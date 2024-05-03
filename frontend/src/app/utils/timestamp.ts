import Sugar from 'sugar';

// sugar date format
export const createTimestamp = (formatString: string) => {
	const formattedDate = Sugar.Date.format(new Date(), formatString);
	return formattedDate;
};
