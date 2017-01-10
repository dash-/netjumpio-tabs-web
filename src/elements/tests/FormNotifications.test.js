import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FormNotifications from '../FormNotifications';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<FormNotifications {...props} />,
		{context: {}}
	);
});
