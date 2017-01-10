import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import CardsListItem from '../CardsListItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({
			href: 'i',
		})
	};

	shallow(
		<CardsListItem {...props} />,
		{context: {}}
	);
});
