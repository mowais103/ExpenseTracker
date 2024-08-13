import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type IncomeStatementProps = {
  Income: string;
  Expense: string;
  Balance: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: '500',
    fontSize: 16,
  },
  text: {
    paddingTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

const IncomeStatement = ({Income, Expense, Balance}: IncomeStatementProps) => (
  <>
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Income</Text>
        <Text style={styles.text}>435</Text>
      </View>
      <View>
        <Text style={styles.header}>Expense</Text>
        <Text style={styles.text}>435</Text>
      </View>
      <View>
        <Text style={styles.header}>Balance</Text>
        <Text style={styles.text}>435</Text>
      </View>
    </View>
  </>
);

export {IncomeStatement};
