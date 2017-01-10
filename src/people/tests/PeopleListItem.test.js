import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import PeopleListItem from '../PeopleListItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({})
	};

	shallow(
		<PeopleListItem {...props} />,
		{context: {}}
	);
});
