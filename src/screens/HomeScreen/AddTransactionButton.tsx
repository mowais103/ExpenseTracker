import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Colors} from '../../styles/common';

type AddTransactionButtonProps = {onPress: () => void};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 56,
    paddingRight: 15,
  },
  addIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.navyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AddTransactionButton = ({onPress}: AddTransactionButtonProps) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.addIconContainer} onPress={onPress}>
      <AtomIcon icon="add" size="large" tintColor={Colors.greyishBlue} />
    </TouchableOpacity>
  </View>
);

export {AddTransactionButton};
