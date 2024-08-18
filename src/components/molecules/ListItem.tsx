import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Icons} from '../../assets/icons';
import {Colors} from '../../styles/common';

type ListItemProps = {
  RightComponent?: React.ReactNode;
  onPressDelete: (id: string) => void;
  backgroundColor?: any;
  title: string;
  subTitle?: string;
  icon?: keyof typeof Icons;
  amount: string;
  trsType: string;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  leftComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  rightComponentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '30%',
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'semibold',
    width: '50%',
  },
});

const ListItem = ({
  icon,
  title,
  subTitle,
  amount,
  trsType,
  onPressDelete,
}: ListItemProps) => (
  <View
    style={[
      styles.container,
      trsType === 'credit'
        ? {backgroundColor: Colors.limeGreen}
        : {backgroundColor: Colors.red},
    ]}>
    <View style={styles.leftComponentContainer}>
      <View style={styles.iconContainer}>
        {icon ? <AtomIcon icon={icon} size="xs" /> : null}
      </View>
      <Text style={styles.text}>{title}</Text>
      {subTitle ? <Text>{subTitle}</Text> : null}
    </View>
    {amount ? (
      <View style={styles.rightComponentContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity onPress={id => onPressDelete(id)}>
          <AtomIcon icon="trash" size="medium" tintColor={Colors.navyBlue} />
        </TouchableOpacity>
        {trsType === 'debit' ? (
          <AtomIcon icon="arrowUp" size="small" tintColor={Colors.darkRed} />
        ) : (
          <AtomIcon icon="arrowDown" size="small" tintColor={Colors.green} />
        )}
      </View>
    ) : null}
  </View>
);

export {ListItem};
