import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { InitializerView as Initializer } from '../Initializer';

it('renders without crashing', () => {
	const props = {
		dispatch: () => {},
	};

	shallow(
		<Initializer {...props} />,
		{context: {}}
	);
});
