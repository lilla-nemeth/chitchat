import Sugar from 'sugar';

export function createTimestamp() {
	// TODO: format the timestamp!

	// const createDate = Sugar.Date.create('Today');
	const formattedDate = Sugar.Date.format(new Date(), '%Y-%m-%d {hh}:{mm}');
	return formattedDate;
}
