import React, { Component, Fragment } from 'react';
import Copy from '../03_organisms/Copy';
import NavLinkArrow from '../01_atoms/NavLinkArrow';
import VerticalText from '../01_atoms/VerticalText';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
/* istanbul ignore next */
import styled from 'styled-components';
import introSVG from '../../lib/computer-svg';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false }
  }
  componentDidCatch(error) {
    if(error) {
      this.setState({error: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.section) {
      try {
        introSVG(this.refs.svg);
      } catch(error) {
        // do nothing
      }
    }
    console.log(!nextProps.section);
    if (!nextProps.section) {
      const elem = ReactDOM.findDOMNode(this.refs.svg).querySelector('div');
      if (elem) {
        ReactDOM.findDOMNode(this.refs.svg).removeChild(elem);
      }
    }
  }
  render() {
    const active = this.props.section;
    if (this.state.error) {
      return (
        <h1>something happened to svg probs</h1>
      )
    } else {

      return (
        <Fragment>
          <VerticalText inview={active}>
            <p>Developer / Designer / Strategy</p>
          </VerticalText>
          <StyledSVG className="svg grid-col-8" ref="svg"></StyledSVG>
          <Copy
            title="Hack The Planet"
            subTitle="Crash n' Burn"
            grid={9}
            inview={active}
            color="rgb(var(--snow))"
          >
          <p>This site and all it's works are a culmination of over 10 years of professional web development and design. I have built marketing sites, web apps, CLI's, custom frameworks, and servers. My knowledge spans the full gamut of web technology and then some. I have designed, strategized, coded, and deployed on the best of what the web has to offer. My experience ranges from  Wordpress to Django to React and I am your Super-ployee<sup>&trade;</sup>. </p>
            <NavLinkArrow title="LEARN MORE" url=".about" classes="button" scrollTo>
              <span className="button-arrow">
                <span className="button-arrow-head"></span>
              </span>
            </NavLinkArrow>
          </Copy>
        </Fragment>
      )
    }
  }
}

Intro.propTypes = {
  section: PropTypes.bool,
}

Intro.defaultProps = {
  section: false,
}

const mapStateToProps = (state) => {
  return {
    section: state.section.intro,
  }
}

const StyledSVG = styled.div`
  min-height: 525px;
`;
export default connect(
  mapStateToProps,
  null
)(Intro)
