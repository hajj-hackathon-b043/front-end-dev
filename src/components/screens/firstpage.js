import React, { Component } from 'react';
import './screens.css';
import QrReader from 'react-qr-reader';
import { FaQrcode } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';
class QRscan extends Component {
  timer = null;

  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    return (
      <div className="Body">
        <div className="container">
          <p className="text">قم بالمسح</p>

          <div className="body">
            <FaQrcode className="icon" />
            <FaHandPointer className="hand" />
          </div>

          <div className="progress">
            <CircularProgress className="loading" variant="determinate" color="inherit" value={this.state.completed} />
            <p className="ERROR">حدث خطاء</p>
          </div>
        </div>
      </div>
    );
  }
}

export default QRscan;
