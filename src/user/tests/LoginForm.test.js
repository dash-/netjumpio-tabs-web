import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<LoginForm {...props} />,
		{context: {}}
	);
});
