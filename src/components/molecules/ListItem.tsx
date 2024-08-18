import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {AtomIcon} from '../../components/atoms/AtomIcon';
import {Icons} from '../../assets/icons';
import {Colors} from '../../styles/common';

type ListItemProps = {
  RightComponent?: React.ReactNode;
  onPress?: () => void;
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
  },
  rightComponentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    maxWidth: '70%',
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
});

const ListItem = ({
  onPress,
  icon,
  title,
  subTitle,
  amount,
  trsType,
}: ListItemProps) => (
  <TouchableOpacity
    onPress={onPress}
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
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
        {subTitle ? <Text>{subTitle}</Text> : null}
      </View>
    </View>
    {amount ? (
      <View style={styles.rightComponentContainer}>
        <Text style={styles.text}>{amount}</Text>
        {trsType === 'debit' ? (
          <AtomIcon icon="arrowUp" size="small" tintColor={Colors.darkRed} />
        ) : (
          <AtomIcon icon="arrowDown" size="small" tintColor={Colors.green} />
        )}
      </View>
    ) : null}
  </TouchableOpacity>
);

export {ListItem};
