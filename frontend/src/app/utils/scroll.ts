// scroll to the latest message
export const scrollToBottom = (ref: React.MutableRefObject<null | HTMLDivElement>): void => {
	ref.current?.scrollIntoView({ behavior: 'smooth' });
};
