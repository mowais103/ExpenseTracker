// @flow

import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomInput} from '../../components/atoms/AtomInput';
import {AtomButton} from '../../components/atoms/AtomButton';
import {Colors} from '../../styles/common';
import {RootStackScreenProps} from '../../../App';
import {checkUserInStorage} from '../../redux/actions/auth';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/common';
import {Spacer} from '../../components/atoms/Spacer';

type LoginScreenProps = RootStackScreenProps<'Login'>;

const Login = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const checkForUser = useCallback(
    (hasChecked: boolean) => dispatch(checkUserInStorage(hasChecked)),
    [dispatch],
  );

  const hasChecked = useAppSelector(
    state => state.authReducer.hasCheckedForUserInStorage,
  );

  const validUsername = 'test@test.com' === email;
  const validPassword = 'tester' === password;

  const onLogin = async () => {
    if (validUsername && validPassword) {
      setLoading(true);
      setError(false);
      await AsyncStorage.setItem('validUser', 'true');
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('HomeScreen');
      }, 2000);
    } else {
      setError(true);
    }
  };

  const checkForLoggedInUser = useCallback(async () => {
    const savedUser = await AsyncStorage.getItem('validUser');
    if (savedUser === null) {
      navigation.navigate('HomeScreen');
    } else {
      checkForUser(true);
    }
  }, [checkForUser, navigation]);

  useEffect(() => {
    checkForLoggedInUser();
  }, [checkForLoggedInUser]);

  if (!hasChecked) {
    return null;
  }

  return (
    <AtomScreenContainer>
      <View style={styles.container}>
        <Text style={{fontSize: 32, paddingBottom: 24}}>Expense Tracker</Text>
        <AtomInput
          value={email}
          spellCheck={false}
          placeholder="Email"
          onChangeText={setEmail}
          autoFocus
          autoCapitalize="none"
        />
        <AtomInput
          value={password}
          spellCheck={false}
          placeholder="Password"
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
        <AtomButton
          title="Login"
          onPress={onLogin}
          loading={loading}
          disabled={loading}
        />
        <Spacer vertical />
        {error && (
          <Text style={styles.errorText}>Invalid username or password</Text>
        )}
        <View style={styles.hintContainer}>
          <Text>username: test@test.com</Text>
          <Text>password: tester</Text>
        </View>
      </View>
    </AtomScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  errorText: {
    color: Colors.red,
  },
});

export {Login};
