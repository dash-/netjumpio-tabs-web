import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GlobalLayout from '../GlobalLayout';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GlobalLayout {...props} />,
		{context: {}}
	);
});
