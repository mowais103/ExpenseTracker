import {StyleProp, TextStyle} from 'react-native';
import {Colors, FontSizes} from './common';

const HEADER_TITLE_STYLE: StyleProp<
  Pick<TextStyle, 'fontSize'> & {
    color?: string;
  }
> = {
  fontSize: FontSizes.medium,
  color: Colors.white,
};

export {HEADER_TITLE_STYLE};
