import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RemoveItemFailNotif from '../RemoveItemFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<RemoveItemFailNotif {...props} />,
		{context: {}}
	);
});
