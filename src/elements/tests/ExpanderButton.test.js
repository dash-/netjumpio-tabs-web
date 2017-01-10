import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ExpanderButton from '../ExpanderButton';

it('renders without crashing', () => {
	const props = {
		onClick: () => {},
	};

	shallow(
		<ExpanderButton {...props} />,
		{context: {}}
	);
});
