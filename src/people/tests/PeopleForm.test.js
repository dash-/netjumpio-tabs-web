import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PeopleForm from '../PeopleForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<PeopleForm {...props} />,
		{context: {}}
	);
});
