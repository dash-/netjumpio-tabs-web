///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import CardsList from '../elements/CardsList';
import CardsListCategory from '../elements/CardsListCategory';
import TabsetsListItem from './TabsetsListItem';
import * as actions from './actions';


///
// View
///

class TabsetsListView extends Component {
	componentWillMount() {
		this.props.getList();
	}

	renderTabsets(tabsets) {
		if(_.isUndefined(tabsets)) return '';

		return tabsets.map((item, key) => (
			<TabsetsListItem item={item} key={key} />
		));
	}

	renderTabsetsByRole(roles, groupName) {
		if(_.isUndefined(roles)) return '';

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
		if(_.isUndefined(groups)) return '';

		return groups.map((item, key) => (
			<CardsListCategory
				name={item.get('name')}
				key={key}
			>
				{this.renderTabsets(item.get('tabsets'))}
				{this.renderTabsetsByRole(item.get('byRole'), item.get('name'))}
			</CardsListCategory>
		));
	}

	render() {
		return (
			<CardsList theme="dark" className="tabsets-list">
				{this.renderTabsets(this.props.tabsets.get('tabsets'))}
				{this.renderTabsetsByRole(this.props.tabsets.get('byRole'))}
				{this.renderTabsetsByGroup(this.props.tabsets.get('byGroup'))}
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
  return {
		getList: () => dispatch(actions.getList()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TabsetsListView);

