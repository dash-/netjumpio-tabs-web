import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ButtonsListItemView as ButtonsListItem } from '../ButtonsListItem';

it('renders without crashing', () => {
	const props = {
		dispatchAction: () => {},
		icon: 'bug',
	};

	shallow(
		<ButtonsListItem {...props} />,
		{context: {}}
	);
});

