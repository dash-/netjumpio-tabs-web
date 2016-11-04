import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from '../layouts/MainLayout.js';
import Landing from '../landing/Landing';
import TabsetList from '../tabset/TabsetList';
import TabsetForm from '../tabset/TabsetForm';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="tabset" component={TabsetList}>
			<Route path=":id" component={TabsetForm} />
		</Route>
	</Route>
);

export default routes;
