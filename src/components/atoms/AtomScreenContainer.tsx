import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../styles/common';

type AtomScreenContainerProps = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
});

const AtomScreenContainer = ({children}: AtomScreenContainerProps) => (
  <SafeAreaView style={styles.container} edges={['top']}>
    {children}
  </SafeAreaView>
);

export {AtomScreenContainer};
