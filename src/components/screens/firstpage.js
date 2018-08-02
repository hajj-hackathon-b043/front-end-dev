import React, { Component } from 'react';
import { connect } from 'react-redux';
import './screens.css';
import QrReader from 'react-qr-reader';
import { FaQrcode } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';
import CircularProgress from '@material-ui/core/CircularProgress';

class QRscan extends Component {
  timer = null;

  state = {
	completed: 0,
	showCamera: false,
	showError: null
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
  }

  openQRscan = () => {
    this.setState({ 
		showCamera: true
	})
  }

  handleScanError = (error) => {
	this.setState({
		showError: error
	  });
	  console.log('failed')
  }

  handleScanSuccess= (data) => {
	if(data) {
		this.setState({
			showCamera: false
		});
		this.props.dispatch({
			type: 'SCAN_DATA_SUCCESS',
			data
		});
		this.props.history.push('/Profile');
	}
  }

  render() {
	  const { showCamera, showError } = this.state;
	  
    return (
      <div className="Body">
        <div className="container">
          <p className="text">قم بالمسح</p>

			{ !showCamera ? (
			<div onClick={this.openQRscan} className="body">
				<FaQrcode className="icon" />
				<FaHandPointer className="hand" />
			</div>
			) : (
			<div className="qrScanner">
				<QrReader 
					onError={this.handleScanError} 
					onScan={this.handleScanSuccess}
					className="Camera"
				/>
			</div>
			)}

          <div className="progress">
			{ showCamera && 
            	<CircularProgress className="loading" variant="determinate" color="inherit" value={this.state.completed} />
			}
			{ showError && 
            	<p className="ERROR">حدث خطاء {showError}</p>
			}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QRscan);
