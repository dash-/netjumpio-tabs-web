import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { AppLayoutView as AppLayout } from '../AppLayout';

it('renders without crashing', () => {
	const props = {
		user: fromJS({}),
		init: fromJS({}),
	};

	shallow(
		<AppLayout {...props} />,
		{context: {}}
	);
});
