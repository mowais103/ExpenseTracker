import * as actions from '../actionTypes/authTypes';

const INITIAL_STATE = {
  hasCheckedForUserInStorage: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CHECK_FOR_USER_IN_STORAGE:
      return {...state, hasCheckedForUserInStorage: action.payload};

    default:
      return state;
  }
};
