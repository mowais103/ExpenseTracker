import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Colors} from './src/styles/common';
import {HEADER_TITLE_STYLE} from './src/styles/constants';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import {AddTransactionScreen} from './src/screens/AddTransactionScreen/AddTransactionScreen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Login} from './src/screens/Login/Login';

const COMMON_HEADER_OPTIONS: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleStyle: HEADER_TITLE_STYLE,
  headerStyle: {backgroundColor: Colors.navyBlue},
  headerTintColor: Colors.white,
  headerTitleAlign: 'center',
};

type RootStackParamList = {
  Login: undefined;
  HomeScreen: undefined;
  AddTransactionScreen: undefined;
};

type RootNavigation = NavigationProp<RootStackParamList>;
type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const App = () => {
  LogBox.ignoreAllLogs();

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                ...COMMON_HEADER_OPTIONS,
                gestureEnabled: false,
              }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerTitle: 'Home',
                  headerBackVisible: false,
                }}
              />
              <Stack.Screen
                name="AddTransactionScreen"
                component={AddTransactionScreen}
                options={{
                  presentation: 'modal',
                  headerTitle: 'ADD TRANSACTION',
                  gestureEnabled: true,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
export type {RootNavigation, RootStackScreenProps, RootStackParamList};
