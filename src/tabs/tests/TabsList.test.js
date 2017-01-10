import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import TabsList from '../TabsList';

it('renders without crashing', () => {
	const props = {
		tabs: fromJS([]),
	};

	shallow(
		<TabsList {...props} />,
		{context: {}}
	);
});
