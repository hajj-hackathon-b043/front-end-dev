import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import IntroWizardCont from './containers/IntroWizardCont';
import Mappage from './components/mappage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={IntroWizardCont} />
        <Route path="/Map" component={Mappage} />
      </div>
    );
  }
}

export default connect()(App);
