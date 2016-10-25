import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="spotlight/:place_id" component={RestaurantFullPage}/>
  </Router>,
  document.getElementById('root')
);
