import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import SectionObserver from './components/03_organisms/SectionObserver';

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        <GridOverlay />
        <SectionObserver />
        <div className="scrollTestNew"></div>
        <div className="scrollTest"></div>
      </div>
    );
  }
}

export default App;
