import React from 'react';
import {IndexRoute, Route} from 'react-router';

import GlobalLayout from '../layouts/GlobalLayout.js';
import AppLayout from '../layouts/AppLayout.js';
import Landing from '../landing/Landing';

import TabsetsItem from '../tabsets/TabsetsItem';

const routes = (
	<Route path="/" component={GlobalLayout}>
		<IndexRoute component={Landing} />
		<Route path="app/" component={AppLayout}>
			<Route path="tabsets/:id" component={TabsetsItem} />
		</Route>
	</Route>
);

export default routes;
