import React, { Component } from 'react';
import './screens.css';
import { FaArrowLeft } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

class Notificationpage extends Component {
  render() {
    return (
      <div className="Body">
        <div className="top">
          <div className="nav">
            <FaArrowLeft />
          </div>
        </div>
        <div className="NotificationList">a</div>
      </div>
    );
  }
}

export default Notificationpage;
