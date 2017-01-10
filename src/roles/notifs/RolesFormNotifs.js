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

class RolesFormNotifsView extends Component {
	render() {
		return (
			<FormNotifications>
				<AddItemFailNotif />
				<EditItemFailNotif />
			</FormNotifications>
		);
	}
}

RolesFormNotifsView.propTypes = {}; 

export default RolesFormNotifsView;

