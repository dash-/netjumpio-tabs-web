import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ProfilePanelButtonView as ProfilePanelButton } from '../ProfilePanelButton';

it('renders without crashing', () => {
	const props = {
		user: fromJS({}),
		togglePanel: () => {},
	};

	shallow(
		<ProfilePanelButton {...props} />,
		{context: {}}
	);
});
