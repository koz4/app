import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import LayoutWrapper from './modules/LayoutWrapper'
import About from './modules/About'
import Repos from './modules/Repos'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';





ReactDOM.render((
  <Router history={browserHistory}>
  <Route component={LayoutWrapper}>
    <Route path="/" component={App} />
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'));