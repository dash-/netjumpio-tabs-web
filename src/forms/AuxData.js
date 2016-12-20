///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';


///
// View
///

class ManagedHiddenFormControlView extends Component {
	///
	// Hooks
	///

	componentWillMount() {
		this.updateValue(this.props.value);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.value !== nextProps.value) {
			this.updateValue(nextProps.value);
		}
	}


	///
	// Methods
	///

	updateValue(value) {
		const formName = this.context.formName;
		const fieldName = this.props.name;

		this.props.fieldChanged(formName, fieldName, value);
	}

	getStateValue() {
		const keyPath = [
			this.context.formName, 'auxValues', this.props.name
		];
		return this.props.forms.getIn(keyPath, '');
	}


	///
	// Rendering
	///

	render() {
		return (
			<input
				type="hidden" 
				value={this.getStateValue()}
			/>
		);
	}
}

ManagedHiddenFormControlView.contextTypes = {
	formName: PropTypes.string.isRequired,
};


///
// Container
///

function mapStateToProps(state) {
	return {
		forms: state.get('forms'),
	};
}

function mapDispatchToProps(dispatch) {
  return {
		fieldChanged: (form, field, value) => dispatch(
			actions.auxFieldChanged(form, field, value)
		),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedHiddenFormControlView);

