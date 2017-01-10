///
// Dependencies
///

import React, { Component } from 'react';

import ItemPanelNotifications from '../../elements/ItemPanelNotifications';
import GetItemFailNotif from './GetItemFailNotif';


///
// View
///

class PeopleItemNotifsView extends Component {
	render() {
		return (
			<ItemPanelNotifications>
				<GetItemFailNotif />
			</ItemPanelNotifications>
		);
	}
}

PeopleItemNotifsView.propTypes = {}; 

export default PeopleItemNotifsView;

