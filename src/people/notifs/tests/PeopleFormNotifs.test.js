import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PeopleFormNotifs from '../PeopleFormNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<PeopleFormNotifs {...props} />,
		{context: {}}
	);
});
