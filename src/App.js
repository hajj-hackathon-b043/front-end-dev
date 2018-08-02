import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Mappage from './components/screens/mappage';
import QRscan from './components/screens/QRscan';
import firstpage from './components/screens/firstpage';
import Profile from './components/screens/Profile';
import Notificationpage from './components/screens/Notificationpage';
import SimpleModalWrapped from './components/screens/modal';

import { launchApp } from './actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(launchApp());
  }
  render() {
    const { isFirstTimeLoading } = this.props;
    return (
      <div className="App">
        <Route path="/Map" component={Mappage} />
        <Route path="/QRscan" component={QRscan} />
        <Route path="/firstpage" component={firstpage} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Notificationpage" component={Notificationpage} />
        <Route path="/SimpleModalWrapped" component={SimpleModalWrapped} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFirstTimeLoading: state.introWizard.isFirstTimeLoading
  };
};

export default connect(mapStateToProps)(App);
