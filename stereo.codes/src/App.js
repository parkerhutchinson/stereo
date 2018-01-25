import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import Intro from './components/04_ecosystem/Intro';
import About from './components/04_ecosystem/About';
import Divider from './components/01_atoms/Divider';

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        <Intro />
        <Divider label="about"/>
        <About />
        <Divider label="work"/>
        <GridOverlay />
      </div>
    );
  }
}

export default App;
