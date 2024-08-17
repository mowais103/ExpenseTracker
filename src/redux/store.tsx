import {createStore, applyMiddleware, AnyAction} from 'redux';
import {thunk, ThunkDispatch} from 'redux-thunk';
import reducers from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppThunk = ThunkDispatch<RootState, void, AnyAction>;

export {persistor, store};
export type {AppDispatch, AppStore, RootState, AppThunk};
