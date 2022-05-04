// scroll to the latest message
export const scrollToBottom = (ref) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};
