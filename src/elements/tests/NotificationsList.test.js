import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NotificationsList from '../NotificationsList';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<NotificationsList {...props} />,
		{context: {}}
	);
});
