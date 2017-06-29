import { v4 } from 'node-uuid';

import * as Api from '../api/api';
import * as types from '../constants/actionTypes';
import { sendSnack } from './snacks';

const requestSignup = () => ({
  type: types.SIGNUP_REQUEST,
});

const receiveSignupSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

const receiveSignupError = payload => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const signup = user => dispatch => {
  dispatch(requestSignup());

  return Api.post('/v1/signup', { user }).then(
    response => {
      dispatch(
        sendSnack({
          id: v4(),
          type: 'success',
          duration: 5000,
          message: 'snacks.signup.success',
          action: 'OK',
        }),
      );
      return dispatch(receiveSignupSuccess(response));
    },
    error => {
      dispatch(
        sendSnack({
          id: v4(),
          type: 'error',
          duration: 5000,
          message: 'snacks.create.error',
          action: 'OK',
        }),
      );
      return dispatch(receiveSignupError(error));
    },
  );
};
