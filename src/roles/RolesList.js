///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import isUndefined from 'lodash/isUndefined';

import CardsList from '../elements/CardsList';
import CardsListCategory from '../elements/CardsListCategory';
import RolesListItem from './RolesListItem';


///
// View
///

class RolesListView extends Component {
	renderRoles(roles) {
		if(isUndefined(roles)) return '';

		return roles.map((item, key) => (
			<RolesListItem item={item} key={key} />
		));
	}

	renderRolesByGroup(groups) {
		if(isUndefined(groups)) return '';

		return groups.map((item, key) => (
			<CardsListCategory
				name={item.get('name')}
				key={key}
			>
				{this.renderRoles(item.get('roles'))}
			</CardsListCategory>
		));
	}

	render() {
		return (
			<CardsList className="roles-list">
				{this.renderRoles(this.props.roles.get('roles'))}
				{this.renderRolesByGroup(this.props.roles.get('groups'))}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		roles: state.getIn(['roles', 'list']),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(RolesListView);

