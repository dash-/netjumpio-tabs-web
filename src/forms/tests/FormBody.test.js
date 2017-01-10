import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FormBody from '../FormBody';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<FormBody {...props} />,
		{context: {}}
	);
});
