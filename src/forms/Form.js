///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
import classNames from 'classnames';

import * as actions from './actions';


///
// View
///

class FormView extends Component {
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
		const props = assign({
			// Can be overridden by this.props
			onSubmit: this.submitForm,
		}, omit(this.props, ['initForm', 'submitForm']), {
			className: classNames('ts-form', this.props.className),
		});

		const children = React.Children.toArray(
			this.props.children
		);

		return React.createElement(
			'form', props, children.concat(
				<button
					type="submit" className="hidden"
					key="hiddenSubmitButton-9a3209b5-35ad-4a35-ae4b-1729eeb8d7cf"
				/>
			)
		);
	}
}

FormView.childContextTypes = {
	formName: PropTypes.string,
};

FormView.propTypes = {
	name: PropTypes.string.isRequired,
	initForm: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	children: PropTypes.node.isRequired,
};

export { FormView };


///
// Container
///

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		initForm: (name) => dispatch(actions.initForm(name)),
		submitForm: (name) => dispatch(actions.submitFormStart(name)),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(FormView);

