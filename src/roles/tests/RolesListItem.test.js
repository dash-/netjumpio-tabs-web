import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import RolesListItem from '../RolesListItem';

it('renders without crashing', () => {
	const props = {
		item: fromJS({}),
	};

	shallow(
		<RolesListItem {...props} />,
		{context: {}}
	);
});
