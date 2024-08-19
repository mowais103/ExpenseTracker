import * as actions from '../actionTypes/authTypes';
import {AppThunk} from '../store';

export const checkUserInStorage =
  (isChecked: Boolean) => async (dispatch: AppThunk) => {
    dispatch({
      type: actions.CHECK_FOR_USER_IN_STORAGE,
      payload: {isChecked},
    });
  };
