import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {IncomeStatement} from './IncomeStatement';
import {AddTransactionButton} from './AddTransactionButton';
import {RootStackScreenProps} from '../../../App';
import {Spacer} from '../../components/atoms/Spacer';
import {useAppSelector} from '../../lib/hooks/common';

type HomeScreenProps = RootStackScreenProps<'HomeScreen'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const transactions = useAppSelector(
    state => state.transactionsReducer.transactions,
  );
  console.log('transactions', transactions);
  return (
    <AtomScreenContainer>
      <View style={styles.header}>
        <Text style={styles.monthStyle}>Month</Text>
        <AtomIcon icon="pieChart" size="medium" />
      </View>
      <Spacer vertical />
      <IncomeStatement />
      <AddTransactionButton
        onPress={() => navigation.navigate('AddTransactionScreen')}
      />
    </AtomScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthStyle: {
    fontSize: 24,
    fontWeight: '500',
  },
});

export {HomeScreen};
