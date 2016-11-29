///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from './actions';


///
// View
///

class ManagedFormView extends Component {
	static childContextTypes = {
		formName: PropTypes.string,
	};

	componentWillMount() {
		this.props.initForm(this.props.name);
	}

	getChildContext() {
		return {
			formName: this.props.name,
		};
	}

	render() {
		const props = _.omit(this.props, [
			'initForm'
		]);

		return React.createElement('form', props, this.props.children);
	}
}


///
// Container
///

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
  return {
		initForm: (name) => dispatch(actions.initForm(name)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedFormView);

