import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import SectionObserver from './components/03_organisms/SectionObserver';
import VerticalText from './components/01_atoms/VerticalText';

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        <GridOverlay />
        <VerticalText>
          <h4>1999 - 2018</h4>
          <p>Developer / Designer / Strategy</p>
        </VerticalText>
        <div className="scrollTest"></div>
      </div>
    );
  }
}

export default App;
