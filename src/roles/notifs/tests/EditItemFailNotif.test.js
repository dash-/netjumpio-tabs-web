import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import EditItemFailNotif from '../EditItemFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<EditItemFailNotif {...props} />,
		{context: {}}
	);
});
