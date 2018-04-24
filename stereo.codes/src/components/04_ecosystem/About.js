import React, { Component } from 'react';
import VerticalText from '../01_atoms/VerticalText';
import Copy from '../03_organisms/Copy';
import CopyPaginator from '../03_organisms/CopyPaginator';
import Gallery from '../03_organisms/Gallery';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { zdepth } from '../../lib/styled-helpers';


class About extends Component {
  galleryActiveDesktopOnly() {
    const active = this.props.section;
    return window.outerWidth >= 768 ? active : false;
  }
  render() {
    const active = this.props.section;

    return (
      <React.Fragment>
        <VerticalText inview={active}>
          <h4>STEREO</h4>
        </VerticalText>
        <StyledAboutContent className="grid-col-18 grid-18 about-content" inview={active}>
          <Copy title="Hackerman" subTitle="Ninja is a dirty word" grid={9} inview={active} color="rgb(var(--blueberry))">
            <CopyPaginator 
              blocks={[(
                  <div key="block-1">
                    <p>Steve Ballmer once said "Developers! Developers! Developers!". I think this perfectly describes my thoughts on programming today.    I feel fortunate to be apart of an industry that affords sweaty bald businessmen to shout at nerds...</p>
                    <p>My name is Parker and this is my digital portfolio. My interest into this field started with my curiosity of design and interactivity from such agencies as [Hi-res](http://hi-res.net/), [Big Spaceship](https://www.bigspaceship.com/), and [2advanced](https://thefwa.com/profiles/2advanced-studios). Whose specialty at the time was Flash.. I know right? Nay be there a developer today that doesn't cringe at just the Name. I was a self taught ActionScript2/3 developer that built interactive experiences for brands.</p>
                  </div>
                ),
                (
                  <div key="block-2">
                    <p>Of course that ship sailed around 2010 and companies like Big Spaceship had to convert their existing businesses to open web standards technology like HTML, CSS, and Javascript. Large companies(famously Apple) started to drop Flash support and the rest of the industry has followed. Taking queue I began working with backend developers to deliver marketing and business websites with Zend Framework and the CMS that pretends not to be a CMS, Wordpress.</p>
                  </div>
                ),
                (
                  <div key="block-3">
                    <p>Since then I have been honing my skills around the front-end development stack. I've worked on all the trendy frameworks and libraries and solutions. Angular 1.x, Backbone, Prototype, jQuery, Drupal, Wordpress, Zend Framework, Django, Flask, Rails, React, and many others. I've built CLI's for automating my local stack and deployment strategies using Python's Fabric. I've built Electron helper apps for clients and even a custom short link generator using Node and MongoDB.</p>
                    <p>My spare time isn't all bleeps and bloops. I enjoy the outdoors as much as any PNW-er. When I'm not coding, I'm out riding my bike, playing Overwatch, Skiing/Snowboarding, or waiting in line for the best food in the country.</p>
                  </div>
                )
              ]}
            />
            <h3>Parker Hutchinson</h3>
            <h4>Full Stack Javascript Developer</h4>
          </Copy>
          <Gallery play={this.galleryActiveDesktopOnly()}/>
        </StyledAboutContent>
        <div className="grid-col-1 spacer"></div>
        <VerticalText inview={active}>
          <h4>CODES</h4>
        </VerticalText>
      </React.Fragment>
    )
  }
}

About.propTypes = {
  section: PropTypes.bool,
}

About.defaultProps = {
  section: false,
}

const mapStateToProps = (state) => {
  return {
    section: state.section.about,
  }
}


const StyledAboutContent = styled.div`
  grid-column-start: 4;
  padding: 70px 0;
  background: none;
  position: relative;
  opacity: ${props => props.inview ? '1' : '0'};
  transition: all var(--fastanimation) .7s;
  grid-template-columns: repeat(18, 1fr);
  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-template-columns: repeat(18, 1fr);
    padding: 30px 0;
  }
  &:before{
    content: '';
    position: absolute;
    background: rgb(var(--snow));
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 10px 10px 30px 0 rgb(var(--stormy));
    z-index: ${zdepth('lowest')};
    clip-path: ${props => props.inview ? 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' : 'polygon(0 0%, 30% 0%, 0% 100%, 0 100%)'};
    transition: all var(--fastanimation) .9s;
  }
  &:after{
    content: '';
    display: block;
    width: 1px;
    height: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(var(--radish));
  }
  &:after{bottom: 0;}
  .copy{
    grid-column-start: 2;
    .bg{display: none;}
    .copy-wrap{
      padding: 20px 0;
    }
    .copy-content{
      h3{
        text-transform: capitalize;
        padding-bottom: 10px;
        @media screen and (max-width: 768px) {
          padding-bottom: 5px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(14, 1fr);
      grid-column-start: 1;
      grid-column-end: 19;
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

export default connect(
  mapStateToProps,
  null
)(About);
