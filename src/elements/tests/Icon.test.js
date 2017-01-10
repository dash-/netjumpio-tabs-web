import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Icon from '../Icon';

it('renders without crashing (name: string)', () => {
	const props = {
		name: 'bug',
	};

	shallow(
		<Icon {...props} />,
		{context: {}}
	);
});

it('renders without crashing (name: object)', () => {
	const props = {
		name: {bug: true},
	};

	shallow(
		<Icon {...props} />,
		{context: {}}
	);
});
