import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import ItemPanelHeader from '../ItemPanelHeader';

it('renders without crashing', () => {
	const props = {
		item: fromJS({}),
	};

	shallow(
		<ItemPanelHeader {...props} />,
		{context: {}}
	);
});
