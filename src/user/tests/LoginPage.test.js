import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginPage from '../LoginPage';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<LoginPage {...props} />,
		{context: {}}
	);
});
