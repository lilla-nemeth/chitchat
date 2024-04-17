// scroll to the latest message
export const scrollToBottom = (ref: any) => {
	ref.current?.scrollIntoView({ behavior: 'smooth' });
};
