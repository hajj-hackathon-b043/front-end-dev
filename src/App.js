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

import './fire';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/Map" component={Mappage} />
        <Route exact path="/QRscan" component={QRscan} />
        <Route exact path="/" component={firstpage} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Notificationpage" component={Notificationpage} />
      </div>
    );
  }
}

export default App;
