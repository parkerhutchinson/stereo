import React, { Component } from 'react';
import SectionObserver from '../03_organisms/SectionObserver';
import Copy from '../03_organisms/Copy';
import NavLink from '../01_atoms/NavLink';
import VerticalText from '../01_atoms/VerticalText';
/* istanbul ignore next */
import introSVG from '../../scripts-lib/computer-svg';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false }
  }
  componentDidMount() {
    // necessary for tests to work.
    try {
      introSVG(this.refs.svg);
    } catch(error) {
      // do nothing
    }

  }
  componentDidCatch(error) {
    if(error) {
      this.setState({error: true});
    }
  }
  render() {
    if (this.state.error) {
      return (
        <h1>something happened to svg probs</h1>
      )
    } else {
      return (
        <SectionObserver classes='grid-col-24 grid-24 intro'>
          <VerticalText>
            <h4>1999 - 2018</h4>
            <p>Developer / Designer / Strategy</p>
          </VerticalText>
          <div className="svg grid-col-8">
            <div id="svg" ref="svg"></div>
          </div>
          <Copy
            title="Hack The Planet"
            subTitle="Crash n' Burn"
            grid={10}
          >
            <p >Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit,
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
}
