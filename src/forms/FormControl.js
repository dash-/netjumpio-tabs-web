///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import * as types from './types';

import FormControl from 'react-bootstrap/lib/FormControl';

import * as actions from './actions';


///
// View
///

class ManagedFormControlView extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(evt) {
		const formName = this.context.formName;
		const fieldName = this.props.name;
		const value = evt.target.value;

		this.props.fieldChanged(formName, fieldName, value);
	}

	render() {
		const form = this.props.forms.get(this.context.formName);

		const props = assign({
			value: form.getIn(['values', this.props.name], ''),
			onChange: this.onChange,
		}, omit(this.props, ['fieldChanged', 'forms']));

		return React.createElement(FormControl, props);
	}
}

ManagedFormControlView.contextTypes = {
	formName: PropTypes.string.isRequired,
};

ManagedFormControlView.propTypes = assign(
	{}, FormControl.propTypes, {
		name: PropTypes.string.isRequired,
		fieldChanged: PropTypes.func.isRequired,
		forms: types.Forms.isRequired,
	}
);


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
			actions.fieldChanged(form, field, value)
		),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedFormControlView);

