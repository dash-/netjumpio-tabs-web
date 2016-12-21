///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
			<CardsList theme="dark" className="groups-list">
				{this.renderGroups(this.props.groups)}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		groups: state.get('groups'),
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

