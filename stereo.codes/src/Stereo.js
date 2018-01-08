import React, { Component } from 'react';
import Button from './components/01_atoms/Button';
import GridOverlay from './components/02_molecules/GridOverlay';

class Stereo extends Component {
  render() {
    return (
      <div className="stereo site-grid">
        <h1 className="grid-col-2">hello h1</h1>
        <h2 className="grid-col-4">hello h2</h2>
        <h3 className="grid-col-8">hello h3</h3>
        <Button />
        <GridOverlay />
      </div>
    );
  }
}

export default Stereo;
