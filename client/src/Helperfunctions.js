import Sugar from 'sugar';

export function createTimestamp(formatString) {
	// const createDate = Sugar.Date.create('Today');
	const formattedDate = Sugar.Date.format(new Date(), formatString);
	return formattedDate;
}
