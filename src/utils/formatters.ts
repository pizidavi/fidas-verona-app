/**
 * Formats date
 * @param date Date
 * @returns string
 */
export const formateDate = (date: Date) =>
  date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
