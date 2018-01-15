import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SectionObserver from '../03_organisms/SectionObserver';
import Copy from '../03_organisms/Copy';
import NavLink from '../01_atoms/NavLink';
import VerticalText from '../01_atoms/VerticalText';

export default class Intro extends Component {
  render() {
    return (
      <SectionObserver classes='grid-col-24 grid-24 intro'>
        <VerticalText>
          <h4>1999 - 2018</h4>
          <p>Developer / Designer / Strategy</p>
        </VerticalText>
        <Copy
          title="Hack The Planet"
          subTitle="Crash n' Burn"
          grid={12}
        >
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <NavLink title="LEARN MORE" url=".about"/>
        </Copy>
      </SectionObserver>
    )
  }
}
