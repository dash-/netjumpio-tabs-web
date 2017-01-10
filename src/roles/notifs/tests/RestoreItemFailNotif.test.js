import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RestoreItemFailNotif from '../RestoreItemFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RestoreItemFailNotif {...props} />,
		{context: {}}
	);
});
