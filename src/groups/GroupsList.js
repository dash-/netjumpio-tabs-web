///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardsList from '../elements/CardsList';
import GroupsListItem from './GroupsListItem';
import * as actions from './actions';



///
// View
///

class GroupsListView extends Component {
	constructor(props) {
		super(props);

		this.props.getGroupsList();
	}

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
  return {
		getGroupsList: () => dispatch(actions.getGroupsList()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(GroupsListView);

