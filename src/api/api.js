import keys from 'lodash/keys';
import { API_ROOT, BASE_URL } from '../constants';

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  if (response.status === 204) {
    return [];
  }

  return response.json();
};

export const get = uri => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
  }).then(handleErrors);
};

export const post = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const put = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const patch = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const destroy = (uri, id) => {
  return fetch(`${API_ROOT}${uri}/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
  }).then(handleErrors);
};

export const postAuthorizationCode = payload => fetch(`${BASE_URL}/oauth/token`, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
}).then(handleErrors);
