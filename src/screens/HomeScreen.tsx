import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  console.log('home Screen');
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {HomeScreen};
