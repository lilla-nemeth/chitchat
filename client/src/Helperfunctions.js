import Sugar from 'sugar';

export function createTimestamp(formatString) {
  const formattedDate = Sugar.Date.format(new Date(), formatString);
  return formattedDate;
}

export const scrollToBottom = (ref) => {
  ref.current.scrollIntoView({ behavior: 'smooth' });
};
