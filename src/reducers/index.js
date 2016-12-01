const kovies = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default kovies;
