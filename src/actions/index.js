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

  fetch('http://localhost:3000/oauth/token', {
    method: 'post',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveLogin(response.access_token))

      fetch('http://localhost:3000/api/v1/movies', {
        method: 'get',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `Bearer ${response.access_token}`
        }
      })
        .then(response => response.json())
        .then(response => console.log(response));
    });
}
