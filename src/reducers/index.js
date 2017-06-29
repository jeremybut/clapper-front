import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import movies from './movies';
import recentMovies from './recentMovies';
import user from './user';
import snacks from './snacks';

const clapper = combineReducers({
  movies,
  recentMovies,
  snacks,
  user,
  form: reduxFormReducer,
});

export default clapper;
