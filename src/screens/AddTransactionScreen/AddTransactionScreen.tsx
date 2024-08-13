import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AtomInput} from '../../components/atoms/AtomInput';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Colors} from '../../styles/common';
import {Spacer} from '../../components/atoms/Spacer';

type AddTransactionScreenProps = {onPress: () => void};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: Colors.navyBlue,
    padding: 12,
    width: '90%',
    borderWidth: 1,
    margin: 12,
    borderColor: Colors.navyBlue,
  },
  label: {
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.navyBlue,
  },
});

const AddTransactionScreen = ({}: AddTransactionScreenProps) => (
  <AtomScreenContainer>
    <Text style={styles.label}>Transaction Title</Text>
    <AtomInput
      placeholder="Transaction Title like Grocery..."
      LeftElement={<AtomIcon icon="add" size="small" />}
    />
    <Text style={styles.label}>Amount</Text>
    <AtomInput
      keyboardType="numeric"
      spellCheck={false}
      placeholder="Enter Amount"
      LeftElement={<Text style={{fontSize: 20}}>{'$'}</Text>}
    />
    <Text style={styles.label}>Transaction Type</Text>
    <AtomInput
      keyboardType="numeric"
      spellCheck={false}
      placeholder="Debit or Credit"
      LeftElement={<Text style={{fontSize: 20}}>{'$'}</Text>}
    />
    <Spacer vertical />
    <TouchableOpacity style={styles.button}>
      <Button title="Add Transaction" color={Colors.white} />
    </TouchableOpacity>
  </AtomScreenContainer>
);

export {AddTransactionScreen};
