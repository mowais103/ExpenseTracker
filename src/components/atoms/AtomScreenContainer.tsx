import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

type AtomScreenContainerProps = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});

const AtomScreenContainer = ({children}: AtomScreenContainerProps) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export {AtomScreenContainer};
