import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { RolesListView as RolesList } from '../RolesList';

it('renders without crashing', () => {
	const props = {
		roles: fromJS({
			roles: [],
			groups: [],
		})
	};

	shallow(
		<RolesList {...props} />,
		{context: {}}
	);
});
