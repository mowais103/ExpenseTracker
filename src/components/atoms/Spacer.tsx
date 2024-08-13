import React from 'react';
import {StyleSheet, View} from 'react-native';

type SpacerProps = {
  vertical?: boolean;
  horizontal?: boolean;
};

const styles = StyleSheet.create({
  spacer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  spacerHorizontal: {
    paddingHorizontal: 12,
  },
  spacerVertical: {
    paddingVertical: 12,
  },
});

const Spacer = ({horizontal, vertical}: SpacerProps) => {
  if (horizontal && vertical) {
    return <View style={styles.spacer} />;
  }
  if (horizontal) {
    return <View style={styles.spacerHorizontal} />;
  }
  if (vertical) {
    return <View style={styles.spacerVertical} />;
  }
  return null;
};

export {Spacer};
