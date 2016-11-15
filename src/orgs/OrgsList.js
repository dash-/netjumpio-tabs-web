///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';



///
// View
///

class OrgsListView extends Component {
	constructor(props) {
		super(props);

		this.props.retrieveOrgs();
	}

	render() {
		return (
			<div className="orgs-list">
				Orgs List
			</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		orgs: state.get('orgs'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		retrieveOrgs: () => dispatch(actions.retrieveOrgs()),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(OrgsListView);

