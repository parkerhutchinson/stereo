import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import './Stereo.scss';

class Stereo extends Component {
  render() {
    return (
      <div className="stereo site-grid">
        <Navigation />
        <GridOverlay />
      </div>
    );
  }
}

export default Stereo;
