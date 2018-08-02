import React, { Component } from 'react';
import './screens.css';
import { FaArrowLeft } from 'react-icons/fa';
import TextFields from './textarea';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

class Notificationpage extends Component {
  render() {
    return (
      <div className="Body">
        <div className="topnotilist">
          <div className="navnoti">
            <Button
              size="small"
              style={{
                backgroundColor: 'transparent',
                display: 'flex',
                top: '2px',
                justifyContent: 'flex-start'
              }}>
              <FaArrowLeft className="notiarrow" />
            </Button>
            <div className="navtextnoti">إعلام</div>
          </div>
        </div>
        <div className="NotificationList">
          <div className="bubble">السلام عليكم</div>
        </div>
        <div className="textdiv">
          <TextFields />
          <Button
            size="small"
            style={{
              backgroundColor: 'transparent',
              display: 'flex',
              bottom: '3.5px',
              justifyContent: 'flex-start'
            }}>
            <FaArrowRight className="notiarrow" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Notificationpage;
