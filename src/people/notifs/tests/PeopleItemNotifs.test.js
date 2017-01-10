import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PeopleItemNotifs from '../PeopleItemNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<PeopleItemNotifs {...props} />,
		{context: {}}
	);
});
