import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import './less/index.less';

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);

