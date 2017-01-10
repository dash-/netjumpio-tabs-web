import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ItemPanelNotifications from '../ItemPanelNotifications';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ItemPanelNotifications {...props} />,
		{context: {}}
	);
});
