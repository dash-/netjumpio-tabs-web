///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import CardsList from '../elements/CardsList';
import CardsListCategory from '../elements/CardsListCategory';
import RolesListItem from './RolesListItem';
import * as actions from './actions';



///
// View
///

class RolesListView extends Component {
	constructor(props) {
		super(props);

		this.props.getRolesList();
	}

	renderRoles(roles) {
		if(_.isUndefined(roles)) return '';

		return roles.map((item, key) => (
			<RolesListItem item={item} key={key} />
		));
	}

	renderRolesByGroup(groups) {
		if(_.isUndefined(groups)) return '';

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
			<CardsList theme="dark" className="roles-list">
				{this.renderRoles(this.props.roles.get('roles'))}
				{this.renderRolesByGroup(this.props.roles.get('byGroup'))}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		roles: state.get('roles'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		getRolesList: () => dispatch(actions.getRolesList()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(RolesListView);

