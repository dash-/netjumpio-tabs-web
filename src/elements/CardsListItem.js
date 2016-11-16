///
// Dependencies
///

import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import _ from 'lodash';

import Icon from './Icon';


///
// View
///

class CardsListItemView extends Component {
	widthClass() {
		if(! this.props.width) return [];

		return 'width-' + this.props.width;
	}

	classNames() {
		return classNames(
			'cards-list-item',
			this.widthClass(),
		);
	}

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

		const defLogoIcon = this.props.defaultLogoIcon || 'question-circle';

		if(_.isString(defLogoIcon)) {
			return (
				<Icon
					name={this.props.defaultLogoIcon}
					className="blank-logo"
					size="3x"
				/>
			);
		}

		return defLogoIcon;
	}

	render() {
		return (
			<li className={this.classNames()}>
				<Link to={this.props.item.get('href')}>
					<div className="logo-container">
						{this.renderLogo(this.props.item)}
					</div>
					<div className="title">
						{this.props.item.get('name')}
					</div>
					{this.props.children}
				</Link>
			</li>
		);
	}
}

export default CardsListItemView;

