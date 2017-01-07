///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
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
		this.props.dispatch(tabsetsActions.getListStart());
		this.props.dispatch(peopleActions.getListStart());
		this.props.dispatch(groupsActions.getListStart());
		this.props.dispatch(rolesActions.getListStart());
	}

	render() {
		// TODO Could put progress loader in here
		return (
			<div className="initializer"></div>
		);
	}
}

InitializerView.propTypes = {
	dispatch: PropTypes.func.isRequired,
};


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
		dispatch
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(InitializerView);

