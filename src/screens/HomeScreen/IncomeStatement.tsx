import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSizes} from '../../styles/common';

type IncomeStatementProps = {
  income: string;
  expense: number;
  balance: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  header: {
    fontWeight: '500',
    fontSize: FontSizes.medium,
  },
  text: {
    paddingTop: 5,
    fontSize: FontSizes.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  incomeTextColor: {
    color: Colors.darkGreen,
  },
  expenseTextColor: {
    color: Colors.red,
  },
  balanceTextColor: {
    color: Colors.navyBlue,
  },
});

const IncomeStatement = ({income, expense, balance}: IncomeStatementProps) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.header}>Income</Text>
      <Text style={[styles.text, styles.incomeTextColor]}>{`$ ${income}`}</Text>
    </View>
    <View>
      <Text style={styles.header}>Expense</Text>
      <Text
        style={[styles.text, styles.expenseTextColor]}>{`$ ${expense}`}</Text>
    </View>
    <View>
      <Text style={styles.header}>Balance</Text>
      <Text
        style={[styles.text, styles.balanceTextColor]}>{`$ ${balance}`}</Text>
    </View>
  </View>
);

export {IncomeStatement};
