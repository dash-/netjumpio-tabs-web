import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import routes from './routes';

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory} routes={routes} />
			</Provider>
		);
	}
}

export default Root;
