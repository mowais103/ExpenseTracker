import {combineReducers} from 'redux';

import {transactionsReducer} from './transactions';

const reducers = combineReducers({
  transactionsReducer,
});

export default reducers;
