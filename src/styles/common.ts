import {Dimensions} from 'react-native';
import {TFontSize, TIconSize} from '../types/common';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  greyishBlue: '#73B8CC',
  creamGrey: '#F5F4F3',
  darkBlue: '#031026',
  navyBlue: '#2a3991',
  grey: '#7F7F7F',
  green: '#98FB98',
  red: '#FF0000',
  darkGreen: '#006400',
  darkRed: '#8B0000',
  limeGreen: '#008000',
};

const FontSizes: Record<TFontSize, number> = {
  xs: 8,
  small: 12,
  medium: 16,
  large: 20,
  xl: 24,
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

export {Colors, FontSizes, IconSizes, WIDTH, HEIGHT};
