///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardsList from '../elements/CardsList';
import UsersListItem from './UsersListItem';
import * as actions from './actions';



///
// View
///

class UsersListView extends Component {
	constructor(props) {
		super(props);

		this.props.getList();
	}

	renderUsers(users) {
		return users.map((item, key) => (
			<UsersListItem item={item} key={key} />
		));
	}

	render() {
		return (
			<CardsList theme="dark" className="users-list">
				{this.renderUsers(this.props.users)}
			</CardsList>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		users: state.get('users'),
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

export default connector(UsersListView);

