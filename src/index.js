import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

const FourOFour = () => <h1>404</h1>;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="*" component={FourOFour} />
    </Route>
  </Router>,
  document.getElementById('root')
);
