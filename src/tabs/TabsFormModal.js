///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';
import isUndefined from 'lodash/isUndefined';

import FormModal from '../forms/FormModal';


///
// View
///

class TabsFormModalView extends Component {
	///
	// Methods
	///

	getTitle() {
		const tabsForm = this.props.forms.get('tabs');

		if(! tabsForm) {
			return '';
		}

		if(! isUndefined(tabsForm.getIn(['values', 'id']))) {
			return 'Update Tab';
		}

		return 'Add a Tab';
	}


	///
	// Rendering
	///

	render() {
		return (
			<FormModal
				name="tabs"
				title={this.getTitle()}
			>
				{this.props.children}
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
	return {};
}

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connector(TabsFormModalView);

