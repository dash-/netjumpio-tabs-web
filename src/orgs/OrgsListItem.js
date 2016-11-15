///
// Dependencies
///

import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from '../elements/Icon';


///
// View
///

class OrgsListItemView extends Component {
	renderLogo(item) {
		if(item.get('logoUrl')) {
			return (
				<img
					className="logo"
					src={this.props.item.get('logoUrl')}
					role="presentation"
				/>
			);
		}

		return (
			<Icon
				name="building-o"
				className="blank-logo"
				size="3x"
			/>
		);
	}

	render() {
		return (
			<li className="orgs-list-item">
				<Link to={'/orgs/' + this.props.item.get('id')}>
					<div className="logo-container">
						{this.renderLogo(this.props.item)}
					</div>
					<div className="title">
						{this.props.item.get('name')}
					</div>
				</Link>
			</li>
		);
	}
}

export default OrgsListItemView;

