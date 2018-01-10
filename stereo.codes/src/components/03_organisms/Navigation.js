import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavLink from '../01_atoms/NavLink';

export default class Navigation extends Component {
  constructor() {
    super();
    this.navConfig = {
      work: '#work',
      about: '#about',
      contact: '#contact',
    }
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

  render() {
    return (
      <div className="grid-col-18 grid-18 navigation">
        <Logo classes="grid-col-10" />
        { this.createMainNav() }
      </div>
    )
  }
}
