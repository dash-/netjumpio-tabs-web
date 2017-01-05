///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from './types';

import CardsList from '../elements/CardsList';
import GroupsListItem from './GroupsListItem';


///
// View
///

class GroupsListView extends Component {
	renderGroups(groups) {
		return groups.map((item, key) => (
			<GroupsListItem item={item} key={key} />
		));
	}

	render() {
		return (
			<CardsList className="groups-list">
				{this.renderGroups(this.props.groups)}
			</CardsList>
		);
	}
}

GroupsListView.propTypes = {
	groups: types.List.isRequired,
};


///
// Container
///

function mapStateToProps(state) {
	return {
		groups: state.getIn(['groups', 'list', 'groups']),
	};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(GroupsListView);

