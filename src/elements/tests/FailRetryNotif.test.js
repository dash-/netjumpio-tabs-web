import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { FailRetryNotifView as FailRetryNotif } from '../FailRetryNotif';

it('renders without crashing', () => {
	const props = {
		triggeredBy: '',
		dispatch: () => {},
	};

	shallow(
		<FailRetryNotif {...props} />,
		{context: {}}
	);
});
