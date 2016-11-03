import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Main from './main/Main.js';
import Landing from './landing/Landing';
import AppList from './apps/AppList';
import AppForm from './apps/AppForm';

const routes = (
	<Route path="/" component={Main}>
		<IndexRoute component={Landing} />
		<Route path="apps" component={AppList}>
			<Route path=":id" component={AppForm} />
		</Route>
	</Route>
);

export default routes;
