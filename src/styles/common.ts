import {TFontSize, TIconSize} from '../types/common';

const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  greyishBlue: '#73B8CC',
  creamGrey: '#F5F4F3',
  darkBlue: '#031026',
  navyBlue: '#2a3991',
};

const FontSizes: Record<TFontSize, number> = {
  xs: 8,
  small: 12,
  medium: 16,
  large: 20,
  xl: 26,
  xxl: 32,
};

const IconSizes: Record<TIconSize, number> = {
  xs: 8,
  small: 12,
  medium: 16,
  large: 20,
  xl: 26,
  xxl: 32,
};

export {Colors, FontSizes, IconSizes};
