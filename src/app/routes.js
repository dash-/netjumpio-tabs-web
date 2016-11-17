import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from '../layouts/MainLayout.js';
import Landing from '../landing/Landing';

import DirsItem from '../dirs/DirsItem';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="dirs/:id" component={DirsItem}>
		</Route>
	</Route>
);

export default routes;
