import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import Intro from './components/04_ecosystem/Intro';
import About from './components/04_ecosystem/About';
import Divider from './components/01_atoms/Divider';
import Work from './components/04_ecosystem/Work';
import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        <Intro />
        <Divider label="about"/>
        <About />
        <Divider label="work"/>
        <Work />
        <GridOverlay />
      </div>
    );
  }
}

injectGlobal`
  :root{
    --stormy: rgba(44, 46, 71, 1);
    --radish: rgba(234, 76, 68, 1);
    --blueberry: rgba(51, 63, 106, 1);
    --milesdavis: rgba(73,88,143,1);
    --snow: rgba(255,255,255,1);
  }
  body{
    background: var(--blueberry);
    color: var(--snow);
  }
`;

export default App;
