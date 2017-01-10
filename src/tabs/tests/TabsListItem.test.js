import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import TabsListItem from '../TabsListItem';

it('renders without crashing', () => {
	const props = {
		tab: fromJS({
			url: 'i'
		}),
	};

	shallow(
		<TabsListItem {...props} />,
		{context: {}}
	);
});
