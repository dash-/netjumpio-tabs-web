///
// Dependencies
///

import React, { Component } from 'react';

import ItemPanelNotifications from '../../elements/ItemPanelNotifications';
import GetItemFailNotif from './GetItemFailNotif';
import RemoveTabDoneNotif from '../../tabs/notifs/RemoveItemDoneNotif';
import RemoveTabFailNotif from '../../tabs/notifs/RemoveItemFailNotif';
import RestoreTabFailNotif from '../../tabs/notifs/RestoreItemFailNotif';


///
// View
///

class TabsetsItemNotifsView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<ItemPanelNotifications>
				<GetItemFailNotif />
				<RemoveTabDoneNotif />
				<RemoveTabFailNotif />
				<RestoreTabFailNotif />
			</ItemPanelNotifications>
		);
	}
}

export default TabsetsItemNotifsView;
