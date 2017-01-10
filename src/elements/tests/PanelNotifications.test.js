import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PanelNotifications from '../PanelNotifications';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<PanelNotifications {...props} />,
		{context: {}}
	);
});
