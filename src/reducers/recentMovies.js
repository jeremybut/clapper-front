import { omit } from 'lodash';

import * as types from '../constants/actionTypes';

const initialState = {
  recentMovieById: {},
  recentMoviesIds: [],
};

const recentMovies = (state = initialState, action) => {
  let recentMovieById = {};
  const { payload, type } = action;

  switch (type) {
    case types.RECENT_MOVIES_SUCCESS:
      for (const recentMovie of payload.movies) {
        recentMovieById = {
          ...recentMovieById,
          [recentMovie.movieid]: recentMovie,
        };
      }
      return {
        ...state,
        recentMovieById,
        recentMoviesIds: payload.movies.map(m => m.movieid),
      };
    default:
      return state;
  }
};

export default recentMovies;
