import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GetItemFailNotif from '../GetItemFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GetItemFailNotif {...props} />,
		{context: {}}
	);
});
