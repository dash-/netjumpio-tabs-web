import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GroupsForm from '../GroupsForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GroupsForm {...props} />,
		{context: {}}
	);
});
