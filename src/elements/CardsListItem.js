///
// Dependencies
///

import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from './Icon';


///
// View
///

class CardsListItemView extends Component {
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
				name={this.props.defaultLogoIcon}
				className="blank-logo"
				size="3x"
			/>
		);
	}

	render() {
		return (
			<li className="cards-list-item">
				<Link to={this.props.item.get('href')}>
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

export default CardsListItemView;

