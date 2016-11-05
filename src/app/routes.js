import React from 'react';
import {IndexRoute, Route} from 'react-router';

import MainLayout from '../layouts/MainLayout.js';
import Landing from '../landing/Landing';
import DirectiveList from '../directive/DirectiveList';
import DirectiveForm from '../directive/DirectiveForm';

const routes = (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Landing} />
		<Route path="directive" component={DirectiveList}>
			<Route path=":id" component={DirectiveForm} />
		</Route>
	</Route>
);

export default routes;
