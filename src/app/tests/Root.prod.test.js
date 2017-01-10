import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Root from '../Root.prod';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<Root {...props} />,
		{context: {}}
	);
});
