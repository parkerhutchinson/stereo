import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import Intro from './components/04_ecosystem/Intro';
import About from './components/04_ecosystem/About';
import Divider from './components/01_atoms/Divider';
import Work from './components/04_ecosystem/Work';
import Modal from './components/03_organisms/Modal';
import WorkFinder from './components/03_organisms/WorkFInder';
import SectionObserver from './components/03_organisms/SectionObserver';
import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        <SectionObserver classes="grid-col-24 grid-24 intro" align="center" label="intro">
        <Intro />
        </SectionObserver>
        <Divider label="about"/>
        <SectionObserver classes="grid-24 grid-col-24 about" align="center" label="about">
        <About />
        </SectionObserver>
        <Divider label="work"/>
        <SectionObserver label="work" threshold={.4}>
          <Work />
        </SectionObserver>
        <GridOverlay />
        <Modal>
          <WorkFinder />
        </Modal>
      </div>
    );
  }
}
// grid columns
const gridNum = 25;
// builds css grid templates
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

// builds all grid columns
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
    --radish: rgba(255, 74, 74, 1);
    --blueberry: rgba(51, 63, 106, 1);
    --milesdavis: rgba(73,88,143,1);
    --snow: rgba(255,255,255,1);
    --roboto: "Roboto", sans-serif;
    --playfair: "Playfair Display", serif;
    --fastanimation: cubic-bezier(.91,.02,.03,.98);
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
    font-family: var(--roboto);
    font-size: 1.4rem;
    &:before{
      content: '';
      display: block;
      height: 100vh;
      max-height: 500px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(45,50,80,1) 0%,rgba(45,50,80,0) 100%);
      z-index: 0;
    }
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
    font-family: var(--playfair);
    font-size: 5.0rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 3.0rem;
    }
  }

  h2{
    font-family: var(--playfair);
    font-size: 3.0rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h3{
    font-family: var(--roboto);
    font-size: 1.5rem;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h6{
    font-family: var(--roboto);
    font-size: 1.4rem;
  }

  p{
    font-family: var(--roboto);
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

  .about{
    transition: all .4s;
    overflow: hidden;
    .vertical-text h4{margin: 0;}
  }

  .intro{
    margin-top: 125px;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    height: calc(100vh - 125px);
    min-height: 550px;
    max-height: 700px;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
    .svg{
      grid-column-start: 4;
      padding-top: 40px;
      @media screen and (max-width: 768px) {
        display: none;
      }
      svg{
        width: 100%;
        max-width: 600px;
      }
    }
    .copy{
      grid-column-start: 13;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(18, 1fr);
      margin-top: 80px;
      height: auto;
      .copy.grid-col-10{
        grid-column-start: 1;
        grid-column-end: span 17;
        .bg{opacity: 0;}
        a.button{
          &:before{
            width: 50%;
          }
        }
        a.button .button-text{
          &:before{
            height: 0;
          }
        }
        a.button .button-arrow{
          transform: rotate(90deg) scale(.8);
          width: 20px;
          &:before,
          .button-arrow-head:before,
          .button-arrow-head:after{
            background: white;
          }
        }
      }
    }
  }

  .work{
    width: 100%;
    display: block;
    clear: both;
    height: 100vh;
    overflow: hidden;
  }

`;

export default App;
