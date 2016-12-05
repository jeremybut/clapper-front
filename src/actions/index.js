import * as Api from '../api/api';
import { API_ROOT } from '../constants';

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

      Api.get(`${API_ROOT}/v1/movies`)
        .then(response => response.json())
        .then(response => console.log(response))
    });
}

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
