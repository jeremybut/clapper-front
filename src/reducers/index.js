const kovies = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          token: action.token,
        },
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
      }
    case 'MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default kovies;
