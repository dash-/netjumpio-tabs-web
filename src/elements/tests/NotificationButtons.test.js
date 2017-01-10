import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotificationButtons from '../NotificationButtons';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<NotificationButtons {...props} />,
		{context: {}}
	);
});
