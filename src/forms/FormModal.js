///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormModal from '../elements/FormModal';
import * as actions from './actions';


///
// View
///

class ManagedFormModalView extends Component {
	constructor(props) {
		super(props);

		this.closeForm = this.closeForm.bind(this);
		this.saveForm = this.saveForm.bind(this);
	}

	componentWillMount() {
		this.props.initForm(this.props.name);
	}

	closeForm() {
		this.props.hideForm(this.props.name);
	}

	saveForm() {
		this.props.submitForm(this.props.name);
	}

	renderForm() {
		if(this.props.form) {
			return React.createElement(this.props.form);
		}

		return this.props.children;
	}

	render() {
		const isFormVisible = this.props.forms.getIn([
			this.props.name, 'isVisible'
		]);

		return (
			<FormModal
				title={'Add ' + this.props.title}
				show={isFormVisible}
				onClose={this.closeForm}
				onSave={this.saveForm}
			>
				{this.renderForm()}
			</FormModal>
		);
	}
}


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
		initForm: (name) => dispatch(actions.initForm(name)),
		hideForm: (name) => dispatch(actions.hideForm(name)),
		submitForm: (name) => dispatch(actions.submitForm(name)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedFormModalView);

