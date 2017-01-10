import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RolesFormNotifs from '../RolesFormNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RolesFormNotifs {...props} />,
		{context: {}}
	);
});
