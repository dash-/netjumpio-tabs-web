///
// Dependencies
///

import React, { Component } from 'react';
import _ from 'lodash';

import Icon from './Icon';


///
// View
///

class ItemPanelHeaderView extends Component {
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
			<h2 className="item-panel-header">
				<div className="logo-container">
					{this.renderLogo(this.props.item)}
				</div>
				<div className="title">
					{this.props.item.get('name')}
				</div>
				<div className="other">
					<small className="category-name">
						{this.props.category}
					</small>
					<div className="addons">
						{this.props.children}
					</div>
				</div>
			</h2>
		);
	}
}

export default ItemPanelHeaderView;

