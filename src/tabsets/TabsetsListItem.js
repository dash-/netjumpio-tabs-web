///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';
import ButtonsList from '../elements/ButtonsList';
import ButtonsListItem from '../elements/ButtonsListItem';
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
					<ButtonsListItem
						icon="pencil"
						action={actions.editItemStart(this.props.item.toJS())}
					/>
					<ButtonsListItem
						icon="times"
						action={actions.removeItemStart(this.props.item.toJS())}
					/>
				</ButtonsList>
			</CardsListItem>
		);
	}
}

export default TabsetsListItemView;

