import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RolesListNotifs from '../RolesListNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RolesListNotifs {...props} />,
		{context: {}}
	);
});
