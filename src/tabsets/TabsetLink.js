///
// Dependencies
///

import React, { Component } from 'react';
import _ from 'lodash';


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
				onClick={this.openTabset.bind(this, this.props.tabset)}
			>
				{this.props.children}
			</div>
		);
	}
}

export default TabsetLink;
