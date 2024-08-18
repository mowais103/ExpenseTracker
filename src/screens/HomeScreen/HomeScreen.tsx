import React, {useCallback, useMemo} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {IncomeStatement} from './IncomeStatement';
import {AddTransactionButton} from './AddTransactionButton';
import {RootStackScreenProps} from '../../../App';
import {Spacer} from '../../components/atoms/Spacer';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/common';
import {getSectionListForTransactions} from './utils';
import {ListItem} from '../../components/molecules/ListItem';
import {Colors, FontSizes} from '../../styles/common';
import {Divider} from '../../components/atoms/Divider';
import moment from 'moment';
import {deleteTransaction} from '../../redux/actions/transaction';

type HomeScreenProps = RootStackScreenProps<'HomeScreen'>;

const SectionSeparatorComponent = () => (
  <View style={styles.separatorComponent}>
    <Divider />
  </View>
);

const getCurrentMonth = moment().format('MMMM');

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const dispatch = useAppDispatch();

  const transactions = useAppSelector(
    state => state.transactionsReducer.transactions,
  );

  const amounts = transactions.map(transaction => Number(transaction.amount));
  const balance = amounts.reduce((acc, curr) => acc + curr, 0);
  const expense =
    amounts.filter(amount => amount < 0).reduce((acc, curr) => acc + curr, 0) *
    -1;

  const income = expense + balance;

  const transactionsSectionList = useMemo(
    () => getSectionListForTransactions(transactions),
    [transactions],
  );

  const onDeleteTransaction = useCallback(
    (id: string) => {
      dispatch(deleteTransaction(id));
    },
    [dispatch],
  );

  const renderSectionHeader = useCallback(
    ({section: {date}}) => <Text style={styles.date}>{date}</Text>,
    [],
  );

  const renderTransactions = useCallback(
    ({item}: any) => (
      <ListItem
        title={item.title}
        amount={`$ ${item.amount}`}
        trsType={item.transactionType}
        onPressDelete={() => onDeleteTransaction(item.id)}
      />
    ),
    [onDeleteTransaction],
  );

  return (
    <AtomScreenContainer>
      <View style={styles.header}>
        <Text style={styles.monthStyle}>{getCurrentMonth}</Text>
        <AtomIcon icon="pieChart" size="medium" />
      </View>
      <IncomeStatement balance={balance} expense={expense} income={income} />
      <Spacer vertical />
      <SectionList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id + index}
        sections={transactionsSectionList ?? []}
        renderItem={renderTransactions}
        renderSectionHeader={renderSectionHeader}
        SectionSeparatorComponent={SectionSeparatorComponent}
        stickyHeaderHiddenOnScroll
      />
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
    paddingBottom: 15,
  },
  monthStyle: {
    fontSize: FontSizes.xl,
    fontWeight: '600',
    color: Colors.navyBlue,
  },
  date: {
    color: Colors.navyBlue,
    fontWeight: '500',
  },
  separatorComponent: {
    paddingVertical: 12,
  },
});

export {HomeScreen};
