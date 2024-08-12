import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {IncomeStatement} from './IncomeStatement';
import {AddTransactionButton} from './AddTransactionButton';
import {RootStackScreenProps} from '../../../App';

type HomeScreenProps = RootStackScreenProps<'HomeScreen'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <AtomScreenContainer>
      <View style={styles.header}>
        <Text style={styles.monthStyle}>Month</Text>
        <AtomIcon icon="pieChart" size="medium" />
      </View>
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
