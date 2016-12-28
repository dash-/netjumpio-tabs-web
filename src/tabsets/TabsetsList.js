///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import isUndefined from 'lodash/isUndefined';

import CardsList from '../elements/CardsList';
import CardsListCategory from '../elements/CardsListCategory';
import TabsetsListItem from './TabsetsListItem';


///
// View
///

class TabsetsListView extends Component {
	renderTabsets(tabsets) {
		if(isUndefined(tabsets)) return '';

		return tabsets.map((item, key) => (
			<TabsetsListItem item={item} key={key} />
		));
	}

	renderTabsetsByRole(roles, groupName) {
		if(isUndefined(roles)) return '';

		return roles.map((item, key) => (
			<CardsListCategory
				name={(groupName ? groupName + ' - ' : '') + item.get('name')}
				key={key}
			>
				{this.renderTabsets(item.get('tabsets'))}
			</CardsListCategory>
		));
	}

	renderTabsetsByGroup(groups) {
		if(isUndefined(groups)) return '';

		return groups.map((item, key) => (
			<CardsListCategory
				name={item.get('name')}
				key={key}
			>
				{this.renderTabsets(item.get('tabsets'))}
				{this.renderTabsetsByRole(item.get('roles'), item.get('name'))}
			</CardsListCategory>
		));
	}

	render() {
		return (
			<CardsList className="tabsets-list">
				{this.renderTabsets(this.props.tabsets.get('tabsets'))}
				{this.renderTabsetsByRole(this.props.tabsets.get('roles'))}
				{this.renderTabsetsByGroup(this.props.tabsets.get('groups'))}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		tabsets: state.get('tabsets').get('list'),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TabsetsListView);

