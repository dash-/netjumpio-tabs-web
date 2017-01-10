import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RolesForm from '../RolesForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RolesForm {...props} />,
		{context: {}}
	);
});
