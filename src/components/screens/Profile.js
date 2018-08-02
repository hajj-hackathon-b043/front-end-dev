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

//modal imported..
import SimpleModalWrapped from './modal';

// import flag from './img/ksa.png';
// import flag from './img/bangladesh.png';

let flag = 'https://www.countryflags.io/be/flat/64.png ';

class Profile extends Component {
  render() {
    return (
      <div className="Body">
        <div
          className="top"
          style={{
            background: 'url(' + flag + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
          <div className="layer">
            <div className="nav">
              <Button
                size="small"
                style={{
                  backgroundColor: 'transparent',
                  display: 'flex',
                  top: '2px',
                  justifyContent: 'flex-start'
                }}>
                <FaArrowLeft className="bell" />
              </Button>
              <p className="top-text">name</p>
              <p className="Id">ID</p>
              <p className="top-text">Nationality</p>
            </div>
            <Button
              size="small"
              style={{
                backgroundColor: 'transparent',
                position: 'relative',
                height: '22px'
              }}>
              <FaBell className="bell" />
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="containbox">
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaBriefcaseMedical className="Icons-select" />
                <p className="white">مركز صحي</p>
              </Button>
            </div>
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaWarehouse className="Icons-select" />
                <p className="white">السكن</p>
              </Button>
            </div>

            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                {/* <FaMale className="Icons-select" /> */}
                <FaFemale className="Icons-select" />
                <p className="white">دورات مياه</p>
              </Button>
            </div>
            <div className="box">
              <Button
                variant="contained"
                className="select"
                style={{
                  backgroundColor: '#fbfbfb',
                  borderRadius: '15px',
                  width: '350px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <FaUtensils className="Icons-select" />
                <p className="white">غذاء</p>
              </Button>
            </div>
          </div>
        </div>

        <SimpleModalWrapped />
      </div>
    );
  }
}

export default Profile;
