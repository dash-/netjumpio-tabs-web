///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrgsListItem from './OrgsListItem';
import * as actions from './actions';



///
// View
///

class OrgsListView extends Component {
	constructor(props) {
		super(props);

		this.props.retrieveOrgs();
	}

	renderOrgs(orgs) {
		return orgs.map((item, key) => (
			<OrgsListItem item={item} key={key} />
		));
	}

	render() {
		return (
			<ul className="orgs-list">
				{this.renderOrgs(this.props.orgs)}
			</ul>
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

