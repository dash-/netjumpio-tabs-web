import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Clickable from '../Clickable';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<Clickable {...props}><i /></Clickable>,
		{context: {}}
	);
});
