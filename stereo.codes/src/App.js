import React, { Component } from 'react';
import GridOverlay from './components/02_molecules/GridOverlay';
import Navigation from './components/03_organisms/Navigation';
import Intro from './components/04_ecosystem/Intro';
import About from './components/04_ecosystem/About';
import Divider from './components/01_atoms/Divider';
import Work from './components/04_ecosystem/Work';
import Connect from './components/04_ecosystem/Connect';
import SectionObserver from './components/03_organisms/SectionObserver';
import { injectGlobal } from 'styled-components';
import { zdepth, gridTemplate, gridTemplateCol } from './lib/styled-helpers';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

class App extends Component {
  render() {
    return (
      <div className="app-stereo site-grid">
        <Navigation />
        
        <SectionObserver
          classes="grid-col-24 grid-24 intro"
          align="center"
          label="intro"
          threshold={.1}
        >
          <Intro />
        </SectionObserver>

        <SectionObserver
          classes="grid-24 grid-col-24 sectionObserverDivider"
          align="center"
          label="dividerabout"
          nostate
          threshold={.1}
        >
          <Divider label="about"/>
        </SectionObserver>

        <SectionObserver
          classes="grid-24 grid-col-24 about"
          align="center"
          label="about"
        >
          <About />
        </SectionObserver>

        <SectionObserver
          classes="grid-24 grid-col-24 sectionObserverDivider"
          align="center"
          label="dividerwork"
          nostate
          threshold={.1}
        >
          <Divider label="work"/>
        </SectionObserver>

        <SectionObserver label="work" threshold={.4}>
          <Work />
        </SectionObserver>
        <SectionObserver
          classes="grid-24 grid-col-24 sectionObserverDivider divider-connect"
          align="center"
          label="dividerconnect"
          nostate
          threshold={.1}
        >
          <Divider label="connect"/>
        </SectionObserver>
        <SectionObserver
          label="connect"
          threshold={.8}
          classes="connect"
        >
          <Connect />
        </SectionObserver>

        <GridOverlay />
      </div>
    );
  }
}
// grid columns
const gridNum = 25;
// builds css grid templates

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Playfair+Display|Roboto:400,700);
  :root{
    --blueberry: 15, 2, 56;
    --radish: 241, 0, 69;
    --stormy: 31, 0, 117;
    --snow: 255,255,255;
    --roboto: "Roboto", "helvetica-neue", sans-serif;
    --playfair: "Playfair Display", times, serif;
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
    background: rgb(var(--blueberry));
    color: rgb(var(--snow));
    overflow-x: hidden;
    text-rendering: geometricPrecision;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: var(--roboto);
    font-size: 1.4rem;
    scroll-behavior: smooth;
    &:before{
      content: '';
      display: block;
      height: 100vh;
      max-height: 500px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, rgb(var(--stormy)) 0%, rgb(var(--blueberry)) 100%);
      z-index: ${zdepth('lowest')};
    }
    @media screen and (max-width: 768px) {
      will-change: scroll-position;
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
    @media screen and (max-width: 768px) {
      font-size: 2.0rem;
      letter-spacing: 0px;
    }
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
  .grid-24{
    grid-template-columns: repeat(24, 1fr);
    @media screen and (max-width: 768px){
      grid-template-columns: repeat(18, 1fr);
    }
  }
  .sectionObserverDivider{
    .divider{
      &:before{
        height: 0;
        transition: height .6s var(--fastanimation);
      }
      h5{
        opacity: 0;
        transition: opacity 1s var(--fastanimation);
      }
    }
    &.inview{
      .divider{
        &:before{
          height: 100%;
        }
        h5{
          opacity: 1;
        }
      }
    }
  }
  .about{
    transition: all .4s;
    overflow: hidden;
    .vertical-text h4{margin: 0;}
    grid-template-columns: repeat(24, 1fr);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(18, 1fr);
    }
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
    z-index: ${zdepth('low')};
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
      margin-top: 40px;
      height: auto;
      margin-bottom: 0;
      .copy.grid-col-9{
        grid-column-start: 1;
        grid-column-end: span 18;
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
    height: calc(100vh - 30px);
    max-height: 700px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: 60vh;
    }
  }
  .divider-connect{
    @media screen and (min-width: 768px) {
      position: relative;
      z-index: ${zdepth('mid')};
      margin-top: calc(-30vh);
    }
  }
  .connect{
    z-index: ${zdepth('mid')};
  }
`;

export default App;
