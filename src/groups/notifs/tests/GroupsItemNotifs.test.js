import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GroupsItemNotifs from '../GroupsItemNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GroupsItemNotifs {...props} />,
		{context: {}}
	);
});
