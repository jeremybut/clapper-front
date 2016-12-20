import { browserHistory } from 'react-router';
import * as Api from '../api/api';
import { API_ROOT } from '../constants';

// Login
const requestLogin = () => ({
  type: 'LOGIN_REQUEST',
});

const receiveLogin = token => ({
  type: 'LOGIN_SUCCESS',
  token,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch(requestLogin());

  const payload = {
    email,
    password,
    grant_type: 'password',
  };

  Api.postAuthorizationCode(payload)
    .then(response => response.json())
    .then(response => {
      dispatch(receiveLogin(response.access_token))
      browserHistory.push('/');
    });
}

// Signup
const requestSignup = () => ({
  type: 'SIGNUP_REQUEST',
});

const receiveSignup = token => ({
  type: 'SIGNUP_SUCCESS',
  token,
});

export const signupUser = ({ email, password, kodi_username, kodi_password, kodi_host, kodi_port }) => (dispatch) => {
  dispatch(requestSignup());

  const payload = {
    email, password, kodi_username, kodi_password, kodi_host, kodi_port
  };

  Api.signup(payload)
    .then(response => response.json())
    .then(response => {
      console.log(response)
  })
};

// Logout
export const logoutUser = () => ({
  type: 'LOGOUT_SUCCESS',
})

// Movies
const requestMovies = () => ({
  type: 'MOVIES_REQUEST',
});

const receiveMovies = response => ({
  type: 'MOVIES_SUCCESS',
  payload: response.movies,
});

export const fetchMovies = () => (dispatch) => {
  dispatch(requestMovies());

  Api.get('/v1/movies')
    .then(response => response.json())
    .then(response => dispatch(receiveMovies(response)));
};

// Recent Movies
const requestRecentMovies = () => ({
  type: 'RECENT_MOVIES_REQUEST',
});

const receiveRecentMovies = response => ({
  type: 'RECENT_MOVIES_SUCCESS',
  payload: response.movies,
});

export const fetchRecentMovies = () => (dispatch) => {
  dispatch(requestRecentMovies());

  Api.get('/v1/movies?event=GetRecentlyAddedMovies')
    .then(response => response.json())
    .then(response => dispatch(receiveRecentMovies(response)));
}

// Movie
const requestMovie = id => ({
  type: 'MOVIE_REQUEST',
  payload: id,
})

const receiveMovie = payload => ({
  type: 'MOVIE_SUCCESS',
  payload,
});

export const fetchMovie = id => (dispatch) => {
  dispatch(requestMovie(id));

  Api.fetchMovie(id)
    .then(response => dispatch(receiveMovie(response.moviedetails)));
}
