///
// Dependencies
///

import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as types from './types';

import * as actions from './actions';


///
// View
///

class AuxDataView extends Component {
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

		this.props.auxFieldChanged(formName, fieldName, value);
	}


	///
	// Rendering
	///

	render() {
		return null;
	}
}

AuxDataView.contextTypes = {
	formName: PropTypes.string.isRequired,
};

AuxDataView.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.bool,
		PropTypes.func,
		PropTypes.number,
		PropTypes.object,
		PropTypes.string,
	]),
	name: PropTypes.string.isRequired,
	auxFieldChanged: PropTypes.func.isRequired,
	forms: types.Forms,
};

export { AuxDataView };


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
		auxFieldChanged: (form, field, value) => dispatch(
			actions.auxFieldChanged(form, field, value)
		),
	};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(AuxDataView);

