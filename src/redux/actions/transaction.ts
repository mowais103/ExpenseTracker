import moment from 'moment';
import * as actions from '../actionTypes/transactionTypes';
import {AppThunk} from '../store';

export const addTransaction = (transaction: any) => (dispatch: AppThunk) => {
  const id = Math.floor(Math.random() * 600000);
  const date = moment().format('D, MM, YYYY');

  dispatch({
    type: actions.ADD_TRANSACTION,
    payload: {...transaction, id, date},
  });
};

export const deleteTransaction = (id: string) => (dispatch: AppThunk) => {
  dispatch({
    type: actions.REMOVE_TRANSACTION,
    payload: id,
  });
};

export const resetTransactions = () => (dispatch: AppThunk) => {
  dispatch({
    type: actions.RESET_TRANSACTIONS,
  });
};
