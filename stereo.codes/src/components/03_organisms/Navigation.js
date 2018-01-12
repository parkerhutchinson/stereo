import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavLink from '../01_atoms/NavLink';
import ReactDOM from 'react-dom';
const Velocity = require('velocity-animate');

export default class Navigation extends Component {
  constructor() {
    super();
    this.navConfig = {
      work: '.scrollTest',
      about: '.about',
      contact: '.contact',
    }
    this.openHamburger.bind(this);
  }

  componentWillMount() {
    this.setState({ openNav: false });
  }

  createMainNav() {
    let elems = [];
    Object.entries(this.navConfig).forEach(([key, value]) => {
      elems.push(
        <li key={key}>
          <span className="borderElem"></span>
          <NavLink url={value} title={key} />
        </li>
      );
    });
    return (
      <ul className="grid-col-8" ref="menuItems">
        {elems}
      </ul>
    );
  }

  openHamburger(evt) {
    const openNav = this.state.openNav ? false : true;

    this.setState({ openNav: openNav });
    this.transitionOpen(openNav);

    evt.preventDefault();
    return false;
  }

  circleSetup() {
    const posLeft = (window.innerWidth / 2) + 20;
    const posTop = (window.innerHeight / 2) * -1 + 20;

    return {
      transform: `translateX(${posLeft}px) translateY(${posTop}px)`,
    }

  }

  transitionOpen(isOpen) {
    const items = this.refs.menuItems.children;
    const winBox = window.innerHeight * 2.3 + 20;
    let delay = 0,
        animateTo = {},
        settings = {
          duration: 500,
          easing: 'easeInOutExpo',
        };

    if (!isOpen) {
      animateTo = {
        opacity: 0,
      }
      Velocity(
        this.refs.circle,
        {width: '0px', height: '0px'},
        {
          duration: 100,
          mobileHA: false
        }
      )
    } else {
      animateTo = {
        opacity: 1,
      }
      Velocity(
        this.refs.circle,
        {width: `${winBox}px`, height: `${winBox}px`},
        {
          duration: 400,
          mobileHA: false
        }
      )
    }

    Object.entries(items).forEach(([index, elem]) => {
      delay = index * 100;
      if (isOpen) {
        settings.delay = delay;
        settings.complete = () => {
          elem.classList.add('active');
        }
      } else {
        elem.classList.remove('active');
      }
      Velocity(
        elem,
        animateTo,
        settings,
      );
    });
  }

  render() {
    const show = this.state.openNav ? 'active' : '';
    return (
      <nav className={`${show} navigation`}>
        <div className="grid-col-18 grid-18">
          <Logo classes="grid-col-10" />
          { this.createMainNav() }
          <a className="hamburger-btn" href="#hamburger" onClick={(evt) => this.openHamburger(evt)}>hamburger</a>
        </div>
        <div className={`${show} hamburger`}>
          <span className="circle" ref="circle" style={this.circleSetup()}></span>
          { this.createMainNav() }
        </div>
      </nav>
    )
  }
}
