import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ItemPanelSection from '../ItemPanelSection';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ItemPanelSection {...props}><i /></ItemPanelSection>,
		{context: {}}
	);
});
