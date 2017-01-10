import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Imagicon from '../Imagicon';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<Imagicon {...props} />,
		{context: {}}
	);
});
