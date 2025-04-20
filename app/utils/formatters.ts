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

/**
 * String to date
 * @param date string
 * @param format string
 * @param delimiter string
 * @returns Date
 */
export const stringToDate = (date: string, format: string, delimiter: string): Date => {
  const formatLowerCase = format.toLowerCase();
  const formatItems = formatLowerCase.split(delimiter);
  const dateItems = date.split(delimiter).map(item => Number(item));
  const monthIndex = formatItems.indexOf('mm');
  const dayIndex = formatItems.indexOf('dd');
  const yearIndex = formatItems.indexOf('yyyy');
  const month = dateItems[monthIndex] - 1;
  return new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
};
