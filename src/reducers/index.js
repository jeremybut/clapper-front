const clapper = (state = {}, action) => {
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
      };
    case 'RECENT_MOVIES_SUCCESS':
      return {
        ...state,
        recent_movies: action.payload,
      };
    case 'MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
      };
    case 'MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.movieid === action.payload.movieid) {
            return action.payload;
          }

          return movie;
        }),
      }
    default:
      return state;
  }
};

export default clapper;
