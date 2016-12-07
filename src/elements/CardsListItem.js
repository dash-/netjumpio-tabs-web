///
// Dependencies
///

import React, { Component } from 'react';
import classNames from 'classnames';
import isString from 'lodash/isString';

import AdvancedLink from './AdvancedLink';
import Icon from './Icon';


///
// View
///

class CardsListItemView extends Component {
	widthClass() {
		if(! this.props.width) return [];

		return 'width-' + this.props.width;
	}

	layoutClass() {
		return this.props.horizontal ? 'horizontal' : [];
	}

	classNames() {
		return classNames(
			'cards-list-item',
			this.widthClass(),
			this.layoutClass(),
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

		if(isString(defLogoIcon)) {
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
				<AdvancedLink to={this.props.item.get('href')}>
					<div className="logo-container">
						{this.renderLogo(this.props.item)}
					</div>
					<div className="text-container">
						<div className="title">
							{this.props.item.get('name')}
						</div>
						<div className="contents">
							{this.props.children}
						</div>
					</div>
				</AdvancedLink>
			</li>
		);
	}
}

export default CardsListItemView;

