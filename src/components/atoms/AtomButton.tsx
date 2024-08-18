import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  TextProps,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../styles/common';

type AtomButtonProps = {
  onPress: () => void;
  title: string;
  containerStyle?: ViewProps;
  textStyle?: TextProps;
  hasShadow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewProps['style'];
} & ViewProps;

const AtomButton = ({
  onPress,
  title,
  loading = false,
  containerStyle,
  disabled,
  style,
  ...rest
}: AtomButtonProps) => {
  const isDisabled = !!disabled || !!loading;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, style]}
      onPress={onPress}
      disabled={isDisabled}
      {...containerStyle}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export {AtomButton};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: Colors.navyBlue,
    padding: 16,
    width: '90%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
