import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

export default class Icon extends Component {
	getName(name) {
		if(! _.isObject(name)) {
			return name;
		}

		return classNames(name);
	}

	getClassName(className) {
		if(! _.isObject(className)) {
			return className;
		}

		return classNames(className);
	}

	render() {
		let name = this.getName(this.props.name);
		let className = this.getClassName(this.props.className);

		let props = _.chain(this.props)
			.omit(['name', 'className'])
			.assign({name: name})
			.assign(className ? {className: className} : {})
			.value();

		return React.createElement(FontAwesome, props);
	}
}

