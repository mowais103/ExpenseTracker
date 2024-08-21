// @flow

import React, {useState, useEffect, useCallback, useRef} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {AtomScreenContainer} from '../../components/atoms/AtomScreenContainer';
import {AtomInput} from '../../components/atoms/AtomInput';
import {AtomButton} from '../../components/atoms/AtomButton';
import {Colors, FontSizes} from '../../styles/common';
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
  const animatedValue = useRef(new Animated.Value(0)).current;

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
    if (savedUser !== null) {
      navigation.navigate('HomeScreen');
    } else {
      checkForUser(true);
    }
  }, [checkForUser, navigation]);

  useEffect(() => {
    checkForLoggedInUser();
  }, [checkForLoggedInUser]);

  const moveRightX = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 20,
      duration: 4000,
      useNativeDriver: false,
    }).start(moveLeftX);
  }, [animatedValue]);

  const moveLeftX = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: -20,
      duration: 4000,
      useNativeDriver: false,
    }).start(moveRightX);
  }, [animatedValue, moveRightX]);

  useEffect(() => {
    moveRightX();
  }, [moveRightX]);

  if (!hasChecked) {
    return null;
  }

  return (
    <AtomScreenContainer style={styles.screenContainer}>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.animatedText,
            {
              transform: [{translateX: animatedValue}],
            },
          ]}>
          Expense Tracker
        </Animated.Text>
        <AtomInput
          value={email}
          spellCheck={false}
          placeholder="Email"
          onChangeText={setEmail}
          autoFocus
          autoCapitalize="none"
          placeholderTextColor={Colors.white}
          style={styles.input}
        />
        <AtomInput
          value={password}
          spellCheck={false}
          placeholder="Password"
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor={Colors.white}
          style={styles.input}
          onSubmitEditing={onLogin}
        />
        <Spacer vertical />
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
          <Text style={styles.hintText}>username: test@test.com</Text>
          <Text style={styles.hintText}>password: tester</Text>
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
  animatedText: {
    fontSize: FontSizes.xxl,
    paddingBottom: 24,
    color: Colors.navyBlue,
    fontWeight: 'bold',
  },
  screenContainer: {
    backgroundColor: Colors.darkBlue,
    marginHorizontal: 0,
  },
  hintText: {
    color: Colors.white,
  },
  input: {
    color: Colors.white,
  },
});

export {Login};
