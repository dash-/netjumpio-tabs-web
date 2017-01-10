import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { GroupsListView as GroupsList } from '../GroupsList';

it('renders without crashing', () => {
	const props = {
		groups: fromJS({
			groups: [{}]
		})
	};

	shallow(
		<GroupsList {...props} />,
		{context: {}}
	);
});
