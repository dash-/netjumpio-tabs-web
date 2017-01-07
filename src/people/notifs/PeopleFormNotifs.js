///
// Dependencies
///

import React, { Component } from 'react';

import FormNotifications from '../../elements/FormNotifications';

import AddItemFailNotif from './AddItemFailNotif';
import EditItemFailNotif from './EditItemFailNotif';


///
// View
///

class PeopleFormNotifsView extends Component {
	render() {
		return (
			<FormNotifications>
				<AddItemFailNotif />
				<EditItemFailNotif />
			</FormNotifications>
		);
	}
}

export default PeopleFormNotifsView;

