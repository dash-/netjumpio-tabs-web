import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import GroupsListItem from '../GroupsListItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({})
	};

	shallow(
		<GroupsListItem {...props} />,
		{context: {}}
	);
});
