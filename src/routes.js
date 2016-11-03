import React from 'react';
import {Route} from 'react-router';

import Landing from './landing/Landing';
import AppForm from './appManager/AppForm';

const routes = (
	<Route path="/" component={Landing}>
		<Route path="apps" component={AppForm} />
	</Route>
);

export default routes;
