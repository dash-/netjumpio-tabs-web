import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from './layouts/MainLayout.js';
import Landing from './landing/Landing';
import AppList from './apps/AppList';
import AppForm from './apps/AppForm';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="apps" component={AppList}>
			<Route path=":id" component={AppForm} />
		</Route>
	</Route>
);

export default routes;
