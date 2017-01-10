import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RolesItemNotifs from '../RolesItemNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RolesItemNotifs {...props} />,
		{context: {}}
	);
});
