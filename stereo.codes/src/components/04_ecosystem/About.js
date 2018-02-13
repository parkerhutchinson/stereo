import React from 'react';
import VerticalText from '../01_atoms/VerticalText';
import Copy from '../03_organisms/Copy';
import SectionObserver from '../03_organisms/SectionObserver';
import Gallery from '../03_organisms/Gallery';
import styled from 'styled-components';


const About = (props) => (
  <SectionObserver classes="grid-24 grid-col-24 about" align="center" label="about">
    <VerticalText>
      <h4>STEREO</h4>
    </VerticalText>
    <StyledAboutContent className="grid-col-18 grid-18 about-content">
      <Copy title="Hackerman" subTitle="Half Unicorn" grid={9}>
        <p>This is our world now. The world of the electron and the
        switch; the beauty of the baud. We exist without nationality,
        skin color, or religious bias. You wage wars, murder, cheat,
        lie to us and try to make us believe it's for our own good,
        yet we're the criminals. Yes, I am a criminal. My crime is
        that of curiosity. <strong>I am a hacker</strong>,
        and this is my manifesto.</p>
        <h3>Parker Hutchinson</h3>
        <h4>Full Stack Javascript Developer</h4>
      </Copy>
      <Gallery />
    </StyledAboutContent>
    <div className="grid-col-1 spacer"></div>
    <VerticalText>
      <h4>CODES</h4>
    </VerticalText>
  </SectionObserver>
)

const StyledAboutContent = styled.div`
  grid-column-start: 4;
  padding: 70px 0;
  background: white;
  box-shadow: 10px 10px 40px var(--stormy);
  position: relative;
  &:after, &:before{
    content: '';
    display: block;
    width: 1px;
    height: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--radish);
  }
  &:before{top: 0;}
  &:after{bottom: 0;}
  .copy{
    grid-column-start: 2;
    .bg{display: none;}
    color: var(--stormy);
    .copy-wrap{
      padding: 20px 0;
    }
    .copy-content{
      h3{
        padding-bottom: 10px;
      }
    }
  }
  .gallery{
    grid-column-start: 12;
  }
  @media screen and (max-width: 768px) {
    .gallery{
      display: none;
    }
  }
`;

export default About;
