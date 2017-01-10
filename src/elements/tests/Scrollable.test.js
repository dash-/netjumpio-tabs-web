import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Scrollable from '../Scrollable';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<Scrollable {...props}><i /></Scrollable>,
		{context: {}}
	);
});
