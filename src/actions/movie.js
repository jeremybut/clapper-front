import * as Api from "../api/api";
import * as types from "../constants/actionTypes";

const requestMovie = () => ({
  type: types.MOVIE_REQUEST
});

const receiveMovie = payload => ({
  type: types.MOVIE_SUCCESS,
  payload
});

const failMovie = payload => ({
  type: types.MOVIE_ERROR,
  payload,
  error: true
});

export const fetchMovie = id => dispatch => {
  dispatch(requestMovie());

  Api.get(`v1/movies/${id}`).then(
    response => dispatch(receiveMovie(response)),
    error => dispatch(failMovie(error))
  );
};
