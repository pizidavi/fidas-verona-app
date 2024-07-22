/**
 * Formats date
 * @param date Date
 * @returns string
 */
export const formateDate = (date: Date | number) => {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
