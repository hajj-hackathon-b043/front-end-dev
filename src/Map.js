import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const api = "AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I";

class Map extends Component {
  static defaultProps = {
    center: {
      lng: 39.1566492,
      lat: 21.6169228
    },
    zoom: 19.25
  };


  render() {
    return (
      <div className="mapcontainer">
        <div className="mapgrid">
          <GoogleMapReact
            bootstrapURLKeys={{ key: api}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;

//AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I
