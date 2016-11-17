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

class TabsetsItemView extends Component {
	componentWillMount() {
		this.props.retrieveTabset(this.props.params.id);
	}

	render() {
		return (
			<div>Tabset</div>
		);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {
		content: state.get('tabsets').get('item'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		retrieveTabset: (id) => dispatch(actions.retrieveTabset(id)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TabsetsItemView);

