import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AtomInput} from '../../components/atoms/AtomInput';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Colors} from '../../styles/common';
import {Spacer} from '../../components/atoms/Spacer';
import {AtomButton} from '../../components/atoms/AtomButton';
import {addTransaction} from '../../redux/actions/transaction';
import {useAppDispatch} from '../../lib/hooks/common';

type AddTransactionScreenProps = {onPress: () => void};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.navyBlue,
    fontWeight: 'semibold',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 0.8,
  },
  disabledButtonStyle: {
    backgroundColor: Colors.grey,
  },
});

const AddTransactionScreen = ({}: AddTransactionScreenProps) => {
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [transactionType, setTransactionType] = useState<
    string | 'debit' | 'credit'
  >('credit');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const isDisabled = !title || !amount || !transactionType;

  // console.log(moment(CurrentDate).format('MMMM Do YYYY, h:mm:ss a'));

  const onAddTransaction = useCallback(() => {
    const newTransaction = {
      title,
      amount,
      transactionType,
    };

    dispatch(addTransaction(newTransaction));
  }, [amount, title, transactionType, dispatch]);

  return (
    <AtomScreenContainer>
      <Text style={styles.label}>Transaction Title</Text>
      <AtomInput
        value={title}
        spellCheck={false}
        placeholder="Transaction Title like Grocery..."
        LeftElement={<AtomIcon icon="add" size="small" />}
        onChangeText={title => setTitle(title)}
        autoFocus
      />
      <Text style={styles.label}>Amount</Text>
      <AtomInput
        value={amount}
        keyboardType="numeric"
        spellCheck={false}
        placeholder="Enter Amount"
        LeftElement={<Text style={{fontSize: 20}}>{'$'}</Text>}
        onChangeText={amount => setAmount(amount)}
      />
      <Text style={styles.label}>Transaction Type</Text>
      <AtomInput
        value={transactionType}
        keyboardType="numeric"
        spellCheck={false}
        placeholder="Debit or Credit"
        LeftElement={<Text style={{fontSize: 20}}>{'$'}</Text>}
        onChangeText={type => setTransactionType(type)}
      />
      <Spacer vertical />
      <View style={styles.buttonContainer}>
        <AtomButton
          title="Add Transaction"
          onPress={onAddTransaction}
          disabled={isDisabled}
          loading={loading}
          style={isDisabled && styles.disabledButtonStyle}
        />
      </View>
    </AtomScreenContainer>
  );
};

export {AddTransactionScreen};
