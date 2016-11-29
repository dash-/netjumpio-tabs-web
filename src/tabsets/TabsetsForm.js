///
// Dependencies
///

import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from '../forms/FormControl';

import Form from '../forms/Form';

import * as actions from './actions';


///
// View
///

class TabsetsFormView extends Component {
	render() {
		return (
			<Form name="tabsets" className="tabsets-form">
				<FormGroup controlId="nameField">
					<ControlLabel>Name</ControlLabel>
					<FormControl
						name="name"
						type="text"
						placeholder="Tabset Name"
					/>
				</FormGroup>
				<FormGroup controlId="logoUrlField">
					<ControlLabel>Logo URL</ControlLabel>
					<FormControl
						name="logoUrl"
						type="text"
						placeholder="www.example.com/icon.png"
					/>
				</FormGroup>
			</Form>
		);
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
		submit: (values) => dispatch(
			actions.submitTabsetsForm(values)
		),
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TabsetsFormView);

