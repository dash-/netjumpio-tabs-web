import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import IconMenu from '../IconMenu';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<IconMenu {...props} />,
		{context: {}}
	);
});
