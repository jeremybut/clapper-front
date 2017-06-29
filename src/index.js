import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';

import './index.css';
import SnacksProvider from './containers/SnacksProvider';
import I18nProvider from './containers/I18nProvider';
import HomePage from './containers/HomePage';
import Movie from './containers/Movie';
// import Login from './containers/Login';
import LoginForm from './containers/login/LoginForm';
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
  <div>
    <Provider store={store}>
      <I18nProvider>
        <SnacksProvider>
          <Router history={browserHistory}>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={App}>
              <IndexRoute component={HomePage} />
              <Route path="movie/:id" component={Movie} />
              <Route path="*" component={FourOFour} />
            </Route>
          </Router>
        </SnacksProvider>
      </I18nProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);
