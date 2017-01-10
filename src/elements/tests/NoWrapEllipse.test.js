import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NoWrapEllipse from '../NoWrapEllipse';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<NoWrapEllipse {...props} />,
		{context: {}}
	);
});
