import {createStore, applyMiddleware, AnyAction} from 'redux';
import {thunk, ThunkDispatch} from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppThunk = ThunkDispatch<RootState, void, AnyAction>;

export type {AppDispatch, AppStore, RootState, AppThunk};
