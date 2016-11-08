///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';


///
// View
///

class OrgListView extends Component {
	render() {
		return (
			<div>Content</div>
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

export default connector(OrgListView);

