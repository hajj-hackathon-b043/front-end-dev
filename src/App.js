import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import IntroWizardCont from './containers/IntroWizardCont';

class App extends Component {
	render() {
		return ( 
			<div className = "App" >
				<Route path = "/" component = { IntroWizardCont }/> 
			</div>
		);
	}
}

export default connect()(App);
