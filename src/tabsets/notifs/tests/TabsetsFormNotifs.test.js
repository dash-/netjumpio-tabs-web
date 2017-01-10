import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsetsFormNotifs from '../TabsetsFormNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsetsFormNotifs {...props} />,
		{context: {}}
	);
});
