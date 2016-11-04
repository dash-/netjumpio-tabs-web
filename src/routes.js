import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from './layouts/MainLayout.js';
import Landing from './landing/Landing';
import AppList from './tabSet/AppList';
import AppForm from './tabSet/AppForm';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="tabSet" component={AppList}>
			<Route path=":id" component={AppForm} />
		</Route>
	</Route>
);

export default routes;
