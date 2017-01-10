import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { NotificationsListItemView as NotificationsListItem } from '../NotificationsListItem';

it('renders without crashing', () => {
	const props = {
		dismiss: () => {},
	};

	shallow(
		<NotificationsListItem {...props} />,
		{context: {}}
	);
});
