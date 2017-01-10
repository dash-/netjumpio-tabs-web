import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Landing from '../Landing';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<Landing {...props} />,
		{context: {}}
	);
});
