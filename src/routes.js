import React from 'react';
import {Route} from 'react-router';

import Landing from './landing/Landing';
import AppList from './apps/AppList';
// import AppForm from './apps/AppForm';

const routes = (
	<Route path="/" component={Landing}>
		<Route path="apps" component={AppList} />
	</Route>
);

export default routes;
