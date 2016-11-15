import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from '../layouts/MainLayout.js';
import Landing from '../landing/Landing';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
	</Route>

	/*
		<Route path="directive" component={DirectiveList}>
			<Route path=":id" component={DirectiveForm} />
		</Route>
	*/
);

export default routes;
