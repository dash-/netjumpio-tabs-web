///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tabsetsActions from '../tabsets/actions';
import * as peopleActions from '../people/actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// View
///

class InitializerView extends Component {
	componentWillMount() {
		this.props.getTabsets();
		this.props.getPeople();
		this.props.getGroups();
		this.props.getRoles();
	}

	render() {
		// TODO Could put progress loader in here
		return (
			<div className="initializer"></div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		init: state.get('init'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getTabsets: () => dispatch(tabsetsActions.getListStart()),
		getPeople: () => dispatch(peopleActions.getListStart()),
		getGroups: () => dispatch(groupsActions.getListStart()),
		getRoles: () => dispatch(rolesActions.getListStart()),
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(InitializerView);

