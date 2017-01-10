import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ButtonsListMenuItemView as ButtonsListMenuItem } from '../ButtonsListMenuItem';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ButtonsListMenuItem {...props} />,
		{context: {}}
	);
});
