import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavLink from '../01_atoms/NavLink';

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
          <NavLink url={value} title={key} />
        </li>
      );
    });
    return (
      <ul className="grid-col-8">
        {elems}
      </ul>
    );
  }
  openHamburger(evt) {
    const openNav = this.state.openNav ? false : true;

    this.setState({ openNav: openNav });

    evt.preventDefault();
    return false;
  }
  render() {
    const show = this.state.openNav ? 'active' : '';
    return (
      <div className="navigation">
        <div className="grid-col-18 grid-18">
          <Logo classes="grid-col-10" />
          { this.createMainNav() }
          <a href="#" onClick={(evt) => this.openHamburger(evt)}>hamburger</a>
        </div>
        <div className={`${show} hamburger`}>
          { this.createMainNav() }
        </div>
      </div>
    )
  }
}
