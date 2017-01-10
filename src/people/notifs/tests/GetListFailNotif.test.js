import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GetListFailNotif from '../GetListFailNotif';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<GetListFailNotif {...props} />,
		{context: {}}
	);
});
