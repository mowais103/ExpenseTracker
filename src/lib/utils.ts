import {IconSizes} from '../styles/common';
import {memoize} from 'underscore';

const getSquareDims = memoize((n: number) => ({width: n, height: n}));

const getIconDims = (size: keyof typeof IconSizes) => {
  return getSquareDims(IconSizes[size]);
};

export {getIconDims};
