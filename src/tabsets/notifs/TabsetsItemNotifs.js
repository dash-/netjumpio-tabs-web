///
// Dependencies
///

import React, { Component } from 'react';

import ItemPanelNotifications from '../../elements/ItemPanelNotifications';
import RemoveTabDoneNotif from '../../tabs/notifs/RemoveItemDoneNotif';


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
				<RemoveTabDoneNotif />
			</ItemPanelNotifications>
		);
	}
}

export default TabsetsItemNotifsView;
