///
// Dependencies
///

import React, { Component } from 'react';

import * as types from './types';

import { keyIn } from '../utils/immutableUtils';
import * as urlUtils from '../utils/urlUtils';

import CardsListItem from '../elements/CardsListItem';
import CardsListItemTitle from '../elements/CardsListItemTitle';
import NoWrapEllipse from '../elements/NoWrapEllipse';
import ButtonsList from '../elements/ButtonsList';
import ButtonsListMenu from '../elements/ButtonsListMenu';
import ButtonsListMenuItem from '../elements/ButtonsListMenuItem';

import * as actions from './actions';


///
// View
///

class TabsListItemView extends Component {
	///
	// Methods
	///

	processTabForCLItem(tab) {
		return (tab
			.filterNot(keyIn('name'))
			.set('href', tab.get('url'))
		);
	}

	processTabUrlForDisplay(url) {
		return urlUtils.stripEndSlash(
			urlUtils.stripWWW(
				urlUtils.stripProtocol(url)
			)
		);
	}


	///
	// Rendering
	///

	render() {
		return (
			<CardsListItem
				item={this.processTabForCLItem(this.props.tab)}
				defaultLogoIcon="link"
				horizontal
			>
				<CardsListItemTitle lines="2">
					{this.props.tab.get('name')}
				</CardsListItemTitle>
				<NoWrapEllipse>
					{this.processTabUrlForDisplay(this.props.tab.get('url'))}
				</NoWrapEllipse>
				<ButtonsList>
					<ButtonsListMenu id="tabsItemMenu">
						<ButtonsListMenuItem
							icon="pencil"
							title="Edit"
							action={actions.editItemPrompt(this.props.tab.toJS())}
						/>
						<ButtonsListMenuItem
							icon="times"
							title="Delete"
							action={actions.removeItemStart(this.props.tab.toJS())}
						/>
					</ButtonsListMenu>
				</ButtonsList>
			</CardsListItem>
		);
	}
}

TabsListItemView.propTypes = {
	tab: types.ListItem.isRequired,
};

export default TabsListItemView;

