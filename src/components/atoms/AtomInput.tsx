import React, {ReactNode, useMemo} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Colors} from '../../styles/common';

interface AtomInputProps extends Partial<TextInputProps> {
  value?: string | undefined;
  onChangeText?: (text: string) => void;
  LeftElement?: ReactNode;
  RightElement?: ReactNode;
  errorMessage?: string;
  disabled?: boolean | null;
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    color: Colors.white,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.navyBlue,
    paddingHorizontal: 16,
    width: '90%',
    borderRadius: 5,
    margin: 12,
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
});

const AtomInput = (
  {
    LeftElement,
    RightElement,
    returnKeyType = 'done',
    disabled,
    errorMessage,
    style,
    ...rest
  }: AtomInputProps,
  inputRef,
) => {
  const getStyleFromProps = useMemo(() => {
    return [styles.input, style];
  }, [style]);

  return (
    <View style={styles.inputContainer}>
      {LeftElement ? (
        <View style={[styles.container, style]}>{LeftElement}</View>
      ) : null}
      <TextInput
        {...rest}
        style={getStyleFromProps}
        ref={inputRef}
        editable={!disabled}
        returnKeyType={returnKeyType}
      />
      {RightElement ? (
        <View style={[styles.container, style]}>{RightElement}</View>
      ) : null}
    </View>
  );
};

export {AtomInput};
