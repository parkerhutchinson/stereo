import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import './Navigation.scss';

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
        <li key={key}>{key}</li>
      );
    });
    return (
      <ul>
        {elems}
      </ul>
    );
  }

  render() {
    return (
      <div className="grid-col-3 grid-18 navigation">
        <Logo className="grid-col-1"/>
        { this.createMainNav() }
      </div>
    )
  }
}
