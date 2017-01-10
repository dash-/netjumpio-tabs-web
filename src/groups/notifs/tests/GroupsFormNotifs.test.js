import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GroupsFormNotifs from '../GroupsFormNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GroupsFormNotifs {...props} />,
		{context: {}}
	);
});
