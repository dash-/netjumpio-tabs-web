///
// Dependencies
///

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import DevTools from './DevTools';
import store from './store';
import routes from './routes';


///
// View
///

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Router history={hashHistory} routes={routes} />
					<DevTools />
				</div>
			</Provider>
		);
	}
}

export default Root;
