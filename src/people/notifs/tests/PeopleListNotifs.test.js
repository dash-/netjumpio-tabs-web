import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PeopleListNotifs from '../PeopleListNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<PeopleListNotifs {...props} />,
		{context: {}}
	);
});
