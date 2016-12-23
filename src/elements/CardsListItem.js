///
// Dependencies
///

import React, { Component } from 'react';
import classNames from 'classnames';

import CardsListItemTitle from './CardsListItemTitle';
import AdvancedLink from './AdvancedLink';
import Imagicon from './Imagicon';


///
// View
///

class CardsListItemView extends Component {
	///
	// Methods
	///

	widthClass() {
		if(! this.props.width) return [];

		return 'width-' + this.props.width;
	}

	layoutClass() {
		return this.props.horizontal ? 'horizontal' : [];
	}

	classNames() {
		return classNames(
			'cards-list-item-outer',
			this.widthClass(),
			this.layoutClass(),
		);
	}


	///
	// Rendering
	///

	render() {
		return (
			<li className={this.classNames()}>
				<AdvancedLink to={this.props.item.get('href')}>
					&nbsp;
				</AdvancedLink>
				<div className="cards-list-item-inner">
					<div className="logo-container">
						<Imagicon
							className="logo"
							src={this.props.item.get('logoUrl')}
							alt={this.props.alt || "Logo"}
							altIcon={this.props.defaultLogoIcon || 'question-circle'}
							size="m"
						/>
					</div>
					<div className="text-container">
						<CardsListItemTitle>
							{this.props.item.get('name')}
						</CardsListItemTitle>
						<div className="contents">
							{this.props.children}
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default CardsListItemView;

