import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from '../layouts/MainLayout.js';
import Landing from '../landing/Landing';

import TabsetsItem from '../tabsets/TabsetsItem';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="tabsets/:id" component={TabsetsItem}>
		</Route>
	</Route>
);

export default routes;
