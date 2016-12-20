import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';
import './index.css';
import HomePage from './containers/HomePage';
import Movie from './containers/Movie';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import clapperReducer from './reducers';
import { loadState, saveState } from './api/localStorage';

const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);
const store = createStoreWithMiddleware(
  clapperReducer,
  persistedState,
  window.devToolsExtension && window.devToolsExtension()
);
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

const FourOFour = () => <h1>404</h1>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="movie/:id" component={Movie} />
        <Route path="*" component={FourOFour} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
