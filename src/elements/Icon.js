///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import isObject from 'lodash/isObject';
import flow from 'lodash/fp/flow';
import flowOmit from 'lodash/fp/omit';
import flowAssign from 'lodash/fp/assign';
import assign from 'lodash/assign';


///
// View
///

class IconView extends Component {
	getName(name) {
		if(! isObject(name)) {
			return name;
		}

		return classNames(name);
	}

	getClassName(className) {
		if(! isObject(className)) {
			return className;
		}

		return classNames(className);
	}

	render() {
		const name = this.getName(this.props.name);
		const className = this.getClassName(this.props.className);

		const props = flow(
			flowOmit(['name', 'className']),
			flowAssign({name: name}),
			flowAssign(className ? {className} : {})
		)(this.props);
		
		return React.createElement(FontAwesome, props);
	}
}

IconView.propTypes = assign({}, FontAwesome.propTypes, {
	name: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]).isRequired,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
});

export default IconView;
