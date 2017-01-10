import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import TabsetLink from '../TabsetLink';

it('renders without crashing', () => {
	const props = {
		tabset: fromJS({}),
	};

	shallow(
		<TabsetLink {...props} />,
		{context: {}}
	);
});
