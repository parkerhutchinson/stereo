import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import Intro from './components/04_ecosystem/Intro';
import About from './components/04_ecosystem/About';
import Divider from './components/01_atoms/Divider';
import Work from './components/04_ecosystem/Work';
import { injectGlobal, css } from 'styled-components';

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
const gridNum = 25;
const robo = `"Roboto", sans-serif`;
const playfair = `"Playfair Display", serif`;

const gridTemplate = (num) => {
  let grid = '';
  for(let i = 1; i < num; i++) {
     grid += `
      .grid-${i}{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(${i}, 1fr);
        align-items: start;
      }
    `;
  }
  return grid;
}

const gridTemplateCol = (num) => {
  let gridCol = '';
  for(let i = 0; i < num; i++) {
    gridCol += `
      .grid-col-${i}{
        grid-column-end: span ${i};
      }
    `;
  }
  return gridCol;
}

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Playfair+Display|Roboto:400,700);
  :root{
    --stormy: rgba(44, 46, 71, 1);
    --radish: rgba(234, 76, 68, 1);
    --blueberry: rgba(51, 63, 106, 1);
    --milesdavis: rgba(73,88,143,1);
    --snow: rgba(255,255,255,1);
  }
  *{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  html, body{
    font-size: 62.5%;
  }
  body{
    background: var(--blueberry);
    color: var(--snow);
    overflow-x: hidden;
    text-rendering: geometricPrecision;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: ${robo};
    font-size: 1.4rem;
  }
  a{
    color: white;
    text-decoration: none;
  }

  ul,li{
    list-style: none;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
  }

  h1{
    font-family: ${playfair};
    font-size: 5.0rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 3.0rem;
    }
  }

  h2{
    font-family: ${playfair};
    font-size: 3.0rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h3{
    font-family: ${playfair};
    font-size: 2.0rem;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h6{
    font-family: ${robo};
    font-size: 1.4rem;
  }

  p{
    font-family: ${robo};
    font-size: 1.2rem;
    strong{
      font-weight: 600;
    }
  }

  .site-grid{
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    @media screen and (max-width: 768px){
      grid-template-columns: repeat(18, 1fr);
    }
  }

  ${gridTemplate(gridNum)}
  ${gridTemplateCol(gridNum)}
`;

export default App;
