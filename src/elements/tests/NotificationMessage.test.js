import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotificationMessage from '../NotificationMessage';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<NotificationMessage {...props}><i /></NotificationMessage>,
		{context: {}}
	);
});
