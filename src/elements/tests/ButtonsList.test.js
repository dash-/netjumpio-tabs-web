import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ButtonsList from '../ButtonsList';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ButtonsList {...props}><i /></ButtonsList>,
		{context: {}}
	);
});
