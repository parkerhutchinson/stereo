import React, { Component, Fragment } from 'react';
import Copy from '../03_organisms/Copy';
import NavLinkArrow from '../01_atoms/NavLinkArrow';
import VerticalText from '../01_atoms/VerticalText';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
/* istanbul ignore next */
import styled from 'styled-components';
import introSVG from '../../scripts-lib/computer-svg';

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
            color="var(--snow)"
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
