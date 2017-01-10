import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RemoveItemDoneNotifView as RemoveItemDoneNotif } from '../RemoveItemDoneNotif';

it('renders without crashing', () => {
	const props = {
		restoreItem: () => {},
	};

	shallow(
		<RemoveItemDoneNotif {...props} />,
		{context: {}}
	);
});
