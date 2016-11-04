import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import routes from './routes';
import '../less/index.less';

function run() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory} routes={routes} />
		</Provider>,
		document.getElementById('root')
	);
}

const app = {run: run};

export default app;
