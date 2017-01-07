///
// Dependencies
///

import React, { Component } from 'react';

import PanelNotifications from '../../elements/PanelNotifications';

import GetListFailNotif from './GetListFailNotif';
import RemoveItemDoneNotif from './RemoveItemDoneNotif';
import RemoveItemFailNotif from './RemoveItemFailNotif';
import RestoreItemFailNotif from './RestoreItemFailNotif';


///
// View
///

class GroupsListNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<PanelNotifications>
				<GetListFailNotif />
				<RemoveItemDoneNotif />
				<RemoveItemFailNotif />
				<RestoreItemFailNotif />
			</PanelNotifications>
		);
	}
}

export default GroupsListNotifsView;
