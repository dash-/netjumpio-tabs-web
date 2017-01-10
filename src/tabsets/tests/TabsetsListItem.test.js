import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import TabsetsListItem from '../TabsetsListItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({}),
	};

	shallow(
		<TabsetsListItem {...props} />,
		{context: {}}
	);
});
