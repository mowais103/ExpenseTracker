import {IconSizes} from '../styles/common';
import {memoize} from 'underscore';

const getSquareDims = memoize((n: number) => ({width: n, height: n}));

const getIconDims = (size: keyof typeof IconSizes) => {
  return getSquareDims(IconSizes[size]);
};

const parseDate = (dateString: string) => {
  const parts = dateString.split(','); // Split the date string into components

  // Extract month, day, and year
  const day = parts[0];
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Create a new Date object
  return new Date(day, month, year);
};

export {getIconDims, parseDate};
