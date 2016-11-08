///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';


///
// View
///

class OrgHeader extends Component {
	render() {
		return (
			<div>Organizations</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(OrgHeader);

