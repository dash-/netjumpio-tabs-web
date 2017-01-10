import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { TabsetsItemView as TabsetsItem } from '../TabsetsItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({}),
		params: {
			id: 'i',
		},
		getItem: () => {},
	};

	shallow(
		<TabsetsItem {...props} />,
		{context: {}}
	);
});
