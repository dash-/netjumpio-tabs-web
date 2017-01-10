import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { PeopleListView as PeopleList } from '../PeopleList';

it('renders without crashing', () => {
	const props = {
		people: fromJS([{}]),
	};

	shallow(
		<PeopleList {...props} />,
		{context: {}}
	);
});
