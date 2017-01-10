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

class GroupsFormNotifsView extends Component {
	render() {
		return (
			<FormNotifications>
				<AddItemFailNotif />
				<EditItemFailNotif />
			</FormNotifications>
		);
	}
}

GroupsFormNotifsView.propTypes = {}; 

export default GroupsFormNotifsView;

