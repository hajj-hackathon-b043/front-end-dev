import React, { Component } from 'react';
import './screens.css';
import { FaArrowLeft } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

class Profile extends Component {
  render() {
    return (
      <div className="Body">
        <div className="top">
          <FaBell className="bell" />

          <div className="nav">
            <FaArrowLeft />
            <p>name</p>
            <p className="Id">ID</p>
            <p>Nationality</p>
          </div>
        </div>
        <div className="bottom">
          <div className="containbox">
            <div className="box">
              <Button
                size="large"
                className="select"
                style={{
                  backgroundColor: 'transparent'
                }}>
                <FaBriefcaseMedical className="Icons-select" />
              </Button>
            </div>
            <div className="box">
              <Button
                size="large"
                className="select"
                style={{
                  backgroundColor: 'transparent'
                }}>
                <FaWarehouse className="Icons-select" />
              </Button>
            </div>
          </div>
          <div className="containbox">
            <div className="box">
              <Button
                size="large"
                className="select"
                style={{
                  backgroundColor: 'transparent'
                }}>
                <p className="white">W.C</p>
                {/* <FaMale className="Icons-select" /> */}
                <FaFemale className="Icons-select" />
              </Button>
            </div>
            <div className="box">
              <Button
                size="large"
                className="select"
                style={{
                  backgroundColor: 'transparent'
                }}>
                <FaUtensils className="Icons-select" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
