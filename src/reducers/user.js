import * as types from '../constants/actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        email: action.email,
        fullname: action.fullname,
        id: action.id,
      };
    case types.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default user;
