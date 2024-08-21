import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontSizes} from '../../styles/common';
import {AtomButton} from '../../components/atoms/AtomButton';

type HeaderProps = {
  onPressLogout: () => void;
  onPressReset: () => void;
};

const Header = ({onPressReset, onPressLogout}: HeaderProps) => (
  <View style={styles.container}>
    <AtomButton title="Reset" onPress={onPressReset} style={styles.button} />
    <AtomButton title="Logout" onPress={onPressLogout} style={styles.button} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: FontSizes.large,
  },
  button: {
    width: '25%',
  },
});

export {Header};
