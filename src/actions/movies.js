import { browserHistory } from 'react-router';
import { v4 } from 'node-uuid';

import * as Api from '../api/api';
import * as types from '../constants/actionTypes';
import { sendSnack } from './snacks';

const requestMovies = () => ({
  type: types.MOVIES_REQUEST,
});

const requestRecentMovies = () => ({
  type: types.RECENT_MOVIES_REQUEST,
});

const receiveMovies = payload => ({
  type: types.MOVIES_SUCCESS,
  payload,
});

const receiveRecentMovies = payload => ({
  type: types.RECENT_MOVIES_SUCCESS,
  payload,
});

const failMovies = payload => ({
  type: types.MOVIES_ERROR,
  payload,
  error: true,
});

const failRecentMovies = payload => ({
  type: types.RECENT_MOVIES_ERROR,
  payload,
  error: true,
});

export const fetchMovies = () => dispatch => {
  dispatch(requestMovies());

  Api.get('/v1/movies').then(
    response => dispatch(receiveMovies(response)),
    error => dispatch(failMovies(error)),
  );
};

export const fetchRecentMovies = () => dispatch => {
  dispatch(requestRecentMovies());

  Api.get('/v1/movies?event=GetRecentlyAddedMovies').then(
    response => dispatch(receiveRecentMovies(response)),
    error => dispatch(failRecentMovies(error)),
  );
};
