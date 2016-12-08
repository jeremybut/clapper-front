import { API_ROOT, BASE_URL } from '../constants';

export const get = uri => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user.token}`,
    },
  });
}

export const postAuthorizationCode = payload => fetch(`${BASE_URL}/oauth/token`, {
  method: 'post',
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify(payload),
});

export const signup = payload => fetch(`${API_ROOT}/v1/signup`, {
  method: 'post',
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify(payload),
});

export const fetchMovie = id => {
  return get('/v1/movies/' + id)
    .then(response => response.json())
}
