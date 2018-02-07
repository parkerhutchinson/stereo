import React, { Component } from 'react';
import SectionObserver from '../03_organisms/SectionObserver';
import Copy from '../03_organisms/Copy';
import NavLinkArrow from '../01_atoms/NavLinkArrow';
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
        <SectionObserver classes="grid-col-24 grid-24 intro" align="center" label="intro">
          <VerticalText>
            <h4>1999 - 2018</h4>
            <p>Developer / Designer / Strategy</p>
          </VerticalText>
          <div className="svg grid-col-8" ref="svg"></div>
          <Copy
            title="Hack The Planet"
            subTitle="Crash n' Burn"
            grid={10}
          >
          <p>This is our world now. The world of the electron and the
            switch; the beauty of the baud. We exist without nationality,
            skin color, or religious bias. You wage wars, murder, cheat,
            lie to us and try to make us believe it's for our own good,
            yet we're the criminals. Yes, I am a criminal. My crime is
            that of curiosity. <strong>I am a hacker</strong>,
            and this is my manifesto.</p>
            <NavLinkArrow title="LEARN MORE" url=".about" classes="button">
              <span className="button-arrow">
                <span className="button-arrow-head"></span>
              </span>
            </NavLinkArrow>
          </Copy>
        </SectionObserver>
      )
    }
  }
}
