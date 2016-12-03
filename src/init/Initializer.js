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
		getTabsets: () => dispatch(tabsetsActions.getList()),
		getPeople: () => dispatch(peopleActions.getList()),
		getGroups: () => dispatch(groupsActions.getList()),
		getRoles: () => dispatch(rolesActions.getList()),
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(InitializerView);

