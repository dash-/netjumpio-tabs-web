///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import isString from 'lodash/isString';

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

ItemPanelHeaderView.propTypes = {
	defaultLogoIcon: PropTypes.node,
	category: PropTypes.node,
	item: ImmutablePropTypes.contains({
		logoUrl: PropTypes.string,
		name: PropTypes.string,
	}).isRequired,
	children: PropTypes.node,
};

export default ItemPanelHeaderView;

