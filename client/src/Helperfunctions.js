import Sugar from 'sugar';

export function createTimestamp() {
	const createDate = Sugar.Date().create();
	// const formattedDate = Sugar.Date().format(createDate, '%Y.%m.%d {hh}:{mm}');
	// return formattedDate;
	return createDate;
}
