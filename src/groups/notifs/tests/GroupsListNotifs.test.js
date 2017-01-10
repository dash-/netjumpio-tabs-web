import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GroupsListNotifs from '../GroupsListNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GroupsListNotifs {...props} />,
		{context: {}}
	);
});
