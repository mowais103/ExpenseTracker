import * as actions from '../actionTypes/transactionTypes';

const INITIAL_STATE = {
  transactions: [],
};

export const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TRANSACTION:
      return {...state, transactions: [...state.transactions, action.payload]};

    case actions.REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          trs => trs.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};
