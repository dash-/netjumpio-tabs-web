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

class RolesListItemView extends Component {
	processItem(item) {
		return item.set('href', '/app/roles/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="user-secret"
				width="2x"
				horizontal
			>
				<ButtonsList>
					<ButtonsListMenu id="rolesItemMenu">
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

RolesListItemView.propTypes = {
	item: types.ListItem.isRequired,
};

export default RolesListItemView;

