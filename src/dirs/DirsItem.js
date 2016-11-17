///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './actions';


///
// View
///

class DirsItemView extends Component {
	componentWillMount() {
		this.props.retrieveDir(this.props.params.id);
	}

	render() {
		return (
			<div>Dir</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		content: state.get('dirs').get('item'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		retrieveDir: (id) => dispatch(actions.retrieveDir(id)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(DirsItemView);

