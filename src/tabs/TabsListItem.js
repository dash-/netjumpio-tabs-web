///
// Dependencies
///

import React, { Component } from 'react';

import * as urlUtils from '../lib/urlUtils';

import CardsListItem from '../elements/CardsListItem';
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
		return tab.set('href', tab.get('url'));
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
				<NoWrapEllipse>
					{this.processTabUrlForDisplay(this.props.tab.get('url'))}
				</NoWrapEllipse>
				<ButtonsList>
					<ButtonsListMenu id="tabsItemMenu">
						<ButtonsListMenuItem
							icon="pencil"
							title="Edit"
							action={actions.editTabPrompt(this.props.tab.toJS())}
						/>
						<ButtonsListMenuItem
							icon="times"
							title="Delete"
							action={actions.removeTabStart(this.props.tab.toJS())}
						/>
					</ButtonsListMenu>
				</ButtonsList>
			</CardsListItem>
		);
	}
}

export default TabsListItemView;

