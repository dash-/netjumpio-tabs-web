import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddItemFailNotif from '../AddItemFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<AddItemFailNotif {...props} />,
		{context: {}}
	);
});
