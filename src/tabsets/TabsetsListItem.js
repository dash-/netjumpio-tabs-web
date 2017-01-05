///
// Dependencies
///

import React, { Component } from 'react';

import * as types from './types';

import CardsListItem from '../elements/CardsListItem';
import ButtonsList from '../elements/ButtonsList';
import ButtonsListMenu from '../elements/ButtonsListMenu';
import ButtonsListMenuItem from '../elements/ButtonsListMenuItem';
import TabSetsLogo from '../elements/TabSetsLogo';

import * as actions from './actions';


///
// View
///

class TabsetsListItemView extends Component {
	processItem(item) {
		return item.set('href', '/app/tabsets/' + this.props.item.get('id'));
	}

	render() {
		const defaultLogoIcon = (
			<TabSetsLogo />
		);

		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon={defaultLogoIcon}
				width="2x"
				horizontal
			>
				<ButtonsList>
					<ButtonsListMenu id="tabsetsItemMenu">
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

TabsetsListItemView.propTypes = {
	item: types.ListItem.isRequired,
};

export default TabsetsListItemView;

