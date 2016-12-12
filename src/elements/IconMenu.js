///
// Dependencies
///

import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';


///
// View
///

class IconMenuView extends Component {
	render() {
		const icon = (
			<Icon name={this.props.icon || 'ellipsis-v'} />
		);

		const props = assign({
			noCaret: true,
			bsSize: 'xsmall',
			bsStyle: 'default',
			title: icon,
			className: 'icon-menu',
		}, omit(this.props, ['icon']));

		return React.createElement(DropdownButton, props, this.props.children);
	}
}

export default IconMenuView;
