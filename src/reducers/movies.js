import { omit } from 'lodash';
import { values } from 'lodash';

import * as types from '../constants/actionTypes';

const initialState = {
  movieById: {},
  moviesIds: [],
};

const movies = (state = initialState, action) => {
  let movieById = {};
  const { payload, type } = action;

  switch (type) {
    case types.MOVIES_SUCCESS:
      for (const movie of values(payload.movies)) {
        movieById = {
          ...movieById,
          [movie.movieid]: movie,
        };
      }
      return {
        ...state,
        movieById,
        moviesIds: payload.movies.map(m => m.movieid),
      };
    case types.MOVIE_SUCCESS:
      return {
        ...state,
        movieById: {
          ...state.movieById,
          [payload.id]: payload,
        },
        moviesIds: [...state.moviesIds, payload.id],
      };
    default:
      return state;
  }
};

export default movies;
