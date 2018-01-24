import React, { Component } from 'react';
import VerticalText from '../01_atoms/VerticalText';
import Copy from '../03_organisms/Copy';
import SectionObserver from '../03_organisms/SectionObserver';
import Gallery from '../03_organisms/Gallery';

export default class About extends Component {
  render() {
    return (
      <SectionObserver classes="grid-col-24 grid-24 about">
        <VerticalText>
          <h4>STEREO</h4>
        </VerticalText>
        <div className="grid-col-20">
          <Gallery />
          <h1>hello world</h1>
        </div>
        <VerticalText>
          <h4>CODES</h4>
        </VerticalText>
      </SectionObserver>
    )
  }
}
