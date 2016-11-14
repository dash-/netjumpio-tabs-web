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

class ManagedFormModal extends Component {
	constructor(props) {
		super(props);

		this.closeForm = this.closeForm.bind(this);
		this.saveForm = this.saveForm.bind(this);
	}

	closeForm() {
		this.props.hideForm(this.props.name);
	}

	saveForm() {
		this.refs.form.save();
	}

	render() {
		const form = React.createElement(this.props.form, {
			ref: 'form',
		});

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
				{form}
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
		hideForm: (name) => dispatch(actions.hideForm(name)),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(ManagedFormModal);

