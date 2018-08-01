import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import IntroWizardCont from './containers/IntroWizardCont';
import Map from './components/Map'
class App extends Component {
	render() {
		return ( 
			<div className = "App" >
				<Route path = "/" component = { IntroWizardCont }/> 
        <Route path = "/Map" component = { Map }/> 

			</div>
		);
	}
}

export default connect()(App);
