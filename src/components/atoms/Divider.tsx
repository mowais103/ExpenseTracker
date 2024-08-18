import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
  },
});

const Divider = () => <View style={styles.container} />;

export {Divider};
