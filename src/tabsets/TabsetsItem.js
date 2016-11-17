///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TabSetsLogo from '../elements/TabSetsLogo';
import ItemPanel from '../elements/ItemPanel';
import ItemPanelHeader from '../elements/ItemPanelHeader';
import * as actions from './actions';


///
// View
///

class TabsetsItemView extends Component {
	componentWillMount() {
		this.props.getTabsetsItem(this.props.params.id);
	}

	render() {
		const defaultLogoIcon = (
			<TabSetsLogo />
		);

		return (
			<ItemPanel className="tabsets-item-panel" item={this.props.item}>
				<ItemPanelHeader
					item={this.props.item}
					category="TabSet"
					defaultLogoIcon={defaultLogoIcon}
				/>
			</ItemPanel>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		item: state.get('tabsets').get('item'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		getTabsetsItem: (id) => dispatch(actions.getTabsetsItem(id)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TabsetsItemView);

