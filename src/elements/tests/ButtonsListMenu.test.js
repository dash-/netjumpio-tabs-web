import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ButtonsListMenu from '../ButtonsListMenu';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ButtonsListMenu {...props} />,
		{context: {}}
	);
});
