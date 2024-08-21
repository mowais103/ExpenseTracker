import React, {useCallback, useMemo} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {IncomeStatement} from './IncomeStatement';
import {AddTransactionButton} from './AddTransactionButton';
import {RootStackScreenProps} from '../../../App';
import {Spacer} from '../../components/atoms/Spacer';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/common';
import {getSectionListForTransactions} from './utils';
import {ListItem} from '../../components/molecules/ListItem';
import {Colors, FontSizes, HEIGHT} from '../../styles/common';
import {Divider} from '../../components/atoms/Divider';
import moment from 'moment';
import {deleteTransaction} from '../../redux/actions/transaction';
import PieChart from 'react-native-pie-chart';
import {useDisableBackHandler} from '../../lib/hooks/useDisableBackHandler';
import AsyncStorage from '@react-native-community/async-storage';
import {checkUserInStorage} from '../../redux/actions/auth';
import {Header} from './Header';

type HomeScreenProps = RootStackScreenProps<'HomeScreen'>;

const SectionSeparatorComponent = () => (
  <View style={styles.separatorComponent}>
    <Divider />
  </View>
);

const getCurrentMonth = moment().format('MMMM');

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const dispatch = useAppDispatch();

  useDisableBackHandler(); // disable back handler

  const transactions = useAppSelector(
    state => state.transactionsReducer.transactions,
  );

  const amounts = transactions.map(transaction => Number(transaction.amount));
  const balance = amounts.reduce((acc, curr) => acc + curr, 0);
  const expense =
    amounts.filter(amount => amount < 0).reduce((acc, curr) => acc + curr, 0) *
    -1;

  const income = expense + balance;

  const widthAndHeight = HEIGHT * 0.12;
  const series = [income, expense, balance];
  const sliceColor = [Colors.darkGreen, Colors.red, Colors.navyBlue];

  const checkForUser = useCallback(
    (hasChecked: boolean) => dispatch(checkUserInStorage(hasChecked)),
    [dispatch],
  );

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

  const onLogout = useCallback(async () => {
    await AsyncStorage.removeItem('validUser');
    checkForUser(false);
    navigation.navigate('Login');
  }, [checkForUser, navigation]);

  return (
    <AtomScreenContainer>
      <Header onPressLogout={onLogout} />
      <View style={styles.header}>
        <Text style={styles.monthStyle}>{getCurrentMonth}</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
      <Spacer vertical />
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
    alignItems: 'center',
    paddingVertical: 12,
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
