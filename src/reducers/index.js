import { combineReducers } from 'redux';

import movies from './movies';
import recentMovies from './recentMovies';
import user from './user';
import snacks from './snacks';

const clapper = combineReducers({
  movies,
  recentMovies,
  snacks,
  user,
});

export default clapper;
