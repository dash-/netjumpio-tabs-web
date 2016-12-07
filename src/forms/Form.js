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


	///
	// Hooks
	///

	constructor(props) {
		super(props);

		this.submitForm = this.submitForm.bind(this);
	}

	componentWillMount() {
		this.props.initForm(this.props.name);
	}

	getChildContext() {
		return {
			formName: this.props.name,
		};
	}


	///
	// Methods
	///

	submitForm(evt) {
		this.props.submitForm(this.props.name);
		evt.preventDefault();
		return false;
	}


	///
	// Rendering
	///

	render() {
		const props = _.assign({
			// Can be overridden by this.props
			onSubmit: this.submitForm,
		}, _.omit(this.props, ['initForm', 'submitForm']));

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
		submitForm: (name) => dispatch(actions.submitForm(name)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedFormView);

