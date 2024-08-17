import * as actions from '../actionTypes/transactionTypes';

const INITIAL_STATE = {
  transactions: [
    {
      id: '',
      title: '',
      amount: '',
      transactionType: '',
      date: '',
    },
  ],
};

export const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TRANSACTION: {
      const {...transaction} = action.payload;
      return {...state, transaction};
    }

    default:
      return state;
  }
};
