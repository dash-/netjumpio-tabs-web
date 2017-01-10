import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FormModal from '../FormModal';

it('renders without crashing', () => {
	const props = {
		onClose: () => {},
		onSave: () => {},
	};

	shallow(
		<FormModal {...props}><i /></FormModal>,
		{context: {}}
	);
});
