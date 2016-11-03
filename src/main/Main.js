// Core dependencies
import React, { Component } from 'react';
import {Router, hashHistory} from 'react-router';

// Aux dependencies
import routes from '../routes';

class Main extends Component {
  render() {
    return (
			<Router history={hashHistory} routes={routes} />
    );
  }
}

export default Main;

