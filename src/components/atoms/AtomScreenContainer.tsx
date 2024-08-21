import React from 'react';
import {StyleSheet, SafeAreaView, ViewProps} from 'react-native';

type AtomScreenContainerProps = {
  children: React.ReactNode;
  style?: ViewProps['style'];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});

const AtomScreenContainer = ({children, style}: AtomScreenContainerProps) => (
  <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
);

export {AtomScreenContainer};
