import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Mappage from './components/screens/mappage';
import QRscan from './components/screens/QRscan';
import firstpage from './components/screens/firstpage';
import Profile from './components/screens/Profile';
import Notificationpage from './components/screens/Notificationpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/Map" component={Mappage} />
        <Route path="/QRscan" component={QRscan} />
        <Route path="/firstpage" component={firstpage} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Notificationpage" component={Notificationpage} />
      </div>
    );
  }
}

export default App;
