import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import isObject from 'lodash/isObject';
import flow from 'lodash/fp/flow';
import omit from 'lodash/fp/omit';
import assign from 'lodash/fp/assign';

export default class Icon extends Component {
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
			omit(['name', 'className']),
			assign({name: name}),
			assign(className ? {className} : {})
		)(this.props);
		
		return React.createElement(FontAwesome, props);
	}
}

