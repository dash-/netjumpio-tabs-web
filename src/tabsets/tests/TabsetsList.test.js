import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { TabsetsListView as TabsetsList } from '../TabsetsList';

it('renders without crashing', () => {
	const props = {
		tabsets: fromJS({
			tabsets: [],
			roles: [],
			groups: [],
		}),
	};

	shallow(
		<TabsetsList {...props} />,
		{context: {}}
	);
});
