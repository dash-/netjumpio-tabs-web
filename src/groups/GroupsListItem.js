///
// Dependencies
///

import React, { Component } from 'react';

import * as types from './types';

import CardsListItem from '../elements/CardsListItem';
import ButtonsList from '../elements/ButtonsList';
import ButtonsListMenu from '../elements/ButtonsListMenu';
import ButtonsListMenuItem from '../elements/ButtonsListMenuItem';

import * as actions from './actions';

///
// View
///

class GroupsListItemView extends Component {
	processItem(item) {
		return item.set('href', '/app/groups/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="id-card"
				width="2x"
				horizontal
			>
				<ButtonsList>
					<ButtonsListMenu id="groupsItemMenu">
						<ButtonsListMenuItem
							icon="pencil"
							title="Edit"
							action={actions.editItemPrompt(this.props.item.toJS())}
						/>
						<ButtonsListMenuItem
							icon="times"
							title="Delete"
							action={actions.removeItemStart(this.props.item.toJS())}
						/>
					</ButtonsListMenu>
				</ButtonsList>
			</CardsListItem>
		);
	}
}

GroupsListItemView.propTypes = {
	item: types.ListItem.isRequired,
};

export default GroupsListItemView;

