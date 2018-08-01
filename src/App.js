import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import IntroWizardCont from './containers/IntroWizardCont';
import Mappage from './components/mappage';

import Map from './components/Map'
import { launchApp } from './actions';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(launchApp())
	}
	render() {
		const { isFirstTimeLoading } = this.props;
		return (
			<div className = "App">
				{ isFirstTimeLoading && <Route path = "/intro" component = { IntroWizardCont } /> }
        		<Route path="/Map" component={Mappage} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isFirstTimeLoading: state.introWizard.isFirstTimeLoading
	}
};

export default connect(mapStateToProps)(App);