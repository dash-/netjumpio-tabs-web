///
// Dependencies
///

import React, { Component, PropTypes } from 'react';

import * as types from './types';

///
// View
///

class TabsetLink extends Component {
	openTabset(tabset) {
		console.log('This features will require browser extensions');
		/*
		const id = tabset.get('id');
		const url = '/#/openTabset?id=' + encodeURIComponent(id);
		const name = ('tabset' + id).replace(/[^a=zA-Z0-9]/g, '');

		window.open(url, name, '');
		*/
	}

	render() {
		return (
			<div
				className="tabset-link"
				onClick={this.openTabset.bind(this, this.props.tabset)}
			>
				{this.props.children}
			</div>
		);
	}
}

TabsetLink.propTypes = {
	tabset: types.Item.isRequired,
	children: PropTypes.node,
};

export default TabsetLink;
