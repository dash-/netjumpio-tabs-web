import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ProfilePanelView as ProfilePanel } from '../ProfilePanel';

it('renders without crashing', () => {
	const props = {
		user: fromJS({}),
		profile: fromJS({}),
		signOut: () => {},
		dismiss: () => {},
	};

	shallow(
		<ProfilePanel {...props} />,
		{context: {}}
	);
});
