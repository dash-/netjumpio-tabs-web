///
// Dependencies
///

import React, { Component } from 'react';

import ItemPanelNotifications from '../../elements/ItemPanelNotifications';
import GetItemFailNotif from './GetItemFailNotif';


///
// View
///

class GroupsItemNotifsView extends Component {
	render() {
		return (
			<ItemPanelNotifications>
				<GetItemFailNotif />
			</ItemPanelNotifications>
		);
	}
}

GroupsItemNotifsView.propTypes = {}; 

export default GroupsItemNotifsView;

