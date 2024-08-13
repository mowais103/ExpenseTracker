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

const COMMON_HEADER_OPTIONS: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleStyle: HEADER_TITLE_STYLE,
  headerStyle: {backgroundColor: Colors.navyBlue},
  headerTintColor: Colors.white,
  headerTitleAlign: 'center',
};

type RootStackParamList = {
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
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              ...COMMON_HEADER_OPTIONS,
              headerTitle: 'Home',
            }}
          />
          <Stack.Screen
            name="AddTransactionScreen"
            component={AddTransactionScreen}
            options={{
              ...COMMON_HEADER_OPTIONS,
              presentation: 'modal',
              headerTitle: 'ADD TRANSACTION',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
export type {RootNavigation, RootStackScreenProps, RootStackParamList};
