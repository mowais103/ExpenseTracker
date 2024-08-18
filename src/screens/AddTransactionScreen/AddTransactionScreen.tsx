import React, {useCallback, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AtomInput} from '../../components/atoms/AtomInput';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Colors} from '../../styles/common';
import {Spacer} from '../../components/atoms/Spacer';
import {AtomButton} from '../../components/atoms/AtomButton';
import {addTransaction} from '../../redux/actions/transaction';
import {useAppDispatch} from '../../lib/hooks/common';
import {RootStackScreenProps} from '../../../App';

type AddTransactionScreenProps = RootStackScreenProps<'AddTransactionScreen'>;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 0.8,
  },
  disabledButtonStyle: {
    backgroundColor: Colors.grey,
    opacity: 0.8,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

const AddTransactionScreen = ({navigation}: AddTransactionScreenProps) => {
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [transactionType, setTransactionType] = useState<
    string | 'debit' | 'credit'
  >('credit');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const isDisabled = !title || !amount || !transactionType;

  const onAddTransaction = useCallback(() => {
    setLoading(true);
    try {
      const newTransaction = {
        title,
        amount: transactionType === 'debit' ? `-${amount}` : amount,
        transactionType,
      };

      dispatch(addTransaction(newTransaction));
      setLoading(false);
      navigation.navigate('HomeScreen');
    } catch (e) {
      setLoading(false);
      Alert.alert('Something went wrong');
    }
  }, [amount, title, transactionType, dispatch, navigation]);

  return (
    <AtomScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={16}
        style={styles.keyboardAvoidingView}>
        <Text style={styles.label}>Transaction Title</Text>
        <AtomInput
          maxLength={24}
          value={title}
          spellCheck={false}
          placeholder="Transaction Title like Grocery..."
          LeftElement={<AtomIcon icon="marker" size="medium" />}
          onChangeText={title => setTitle(title)}
          autoFocus
        />
        <Text style={styles.label}>Amount</Text>
        <AtomInput
          value={amount}
          keyboardType="numeric"
          spellCheck={false}
          placeholder="Enter Amount"
          LeftElement={<AtomIcon icon="dollar" size="medium" />}
          onChangeText={amount => setAmount(amount)}
        />
        <Text style={styles.label}>Transaction Type</Text>
        <AtomInput
          value={transactionType}
          keyboardType="numeric"
          spellCheck={false}
          placeholder="Debit or Credit"
          LeftElement={<AtomIcon icon="marker" size="medium" />}
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
      </KeyboardAvoidingView>
    </AtomScreenContainer>
  );
};

export {AddTransactionScreen};
