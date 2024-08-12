import React from 'react';
import {Image, ImageProps, ImageStyle, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets/icons';
import {IconSizes} from '../../styles/common';
import {getIconDims} from '../../lib/utils';

type AppIconProps = Omit<ImageProps, 'source'> & {
  icon: keyof typeof Icons;
  style?: ImageStyle;
  onPress?: () => void;
  size?: keyof typeof IconSizes;
};

const AtomIcon = ({
  resizeMode = 'contain',
  icon,
  style,
  onPress,
  size,
  ...rest
}: AppIconProps) => {
  let customStyle = [];

  if (size) {
    customStyle.push(getIconDims(size));
  } else {
    customStyle.push(style);
  }

  if (onPress) {
    return (
      <TouchableOpacity
        style={[style, {...customStyle}]}
        hitSlop={20}
        {...rest}
        activeOpacity={0.5}
        onPress={onPress}>
        <Image
          resizeMode={resizeMode}
          style={[{...customStyle}, style]}
          source={Icons[icon]}
          {...rest}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Image
      resizeMode={resizeMode}
      style={[...customStyle, style]}
      source={Icons[icon]}
      {...rest}
    />
  );
};

export {AtomIcon};
