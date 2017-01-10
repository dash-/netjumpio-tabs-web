import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsetsListNotifs from '../TabsetsListNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsetsListNotifs {...props} />,
		{context: {}}
	);
});
