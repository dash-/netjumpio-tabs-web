import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	// Router, Route, Link, IndexRoute, hashHistory, browserHistory
	Router, Route, hashHistory
} from 'react-router';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
        <Route path='/' component={Index} />
        <Route path='/example' component={Example} />
      </Router>
    );
  }
}

const Index = () => {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
			</div>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	);
};

const Example = () => {
	return (
		<div>Example</div>
	);
}

export default App;
