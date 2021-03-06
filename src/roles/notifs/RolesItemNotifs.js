///
// Dependencies
///

import React, { Component } from 'react';

import ItemPanelNotifications from '../../elements/ItemPanelNotifications';
import GetItemFailNotif from './GetItemFailNotif';


///
// View
///

class RolesItemNotifsView extends Component {
	render() {
		return (
			<ItemPanelNotifications>
				<GetItemFailNotif />
			</ItemPanelNotifications>
		);
	}
}

RolesItemNotifsView.propTypes = {}; 

export default RolesItemNotifsView;

