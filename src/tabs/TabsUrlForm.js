///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';

import Form from '../forms/Form';
import FormControl from '../forms/FormControl';
import Icon from '../elements/Icon';


///
// View
///

class TabsUrlFormView extends Component {
	///
	// Rendering
	///

	render() {
		return (
			<Form name="tabsUrl" className="add-tab-form form-inline">
				<FormGroup controlId="websites">
					<InputGroup>
						<InputGroup.Addon>Web Address</InputGroup.Addon>
						<FormControl
							type="text"
							placeholder="http://www.example.com/"
							name="url"
						/>
					</InputGroup>
				</FormGroup>
				<Button bsStyle="primary" type="submit">
					<Icon name="plus" />
				</Button>
				{this.props.children}
			</Form>
		);
	}
}

TabsUrlFormView.propTypes = {
	children: PropTypes.node,
};

export default TabsUrlFormView;

