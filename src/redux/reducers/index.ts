import {combineReducers} from 'redux';

import {transactionsReducer} from './transactions';
import {authReducer} from './auth';

const reducers = combineReducers({
  transactionsReducer,
  authReducer,
});

export default reducers;
