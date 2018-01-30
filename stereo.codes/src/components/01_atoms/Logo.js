import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { showNav } from '../../actions/navigation-actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
const Velocity = require('velocity-animate');

const StyledLogo = styled.h1`
  position: relative;
  min-height: 50px;
  line-height: 1.6;
  font-size: 3.0rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  grid-column-start: 2;
  a {
    letter-spacing: 6px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 0;
    margin-left: 0;
  }
`;

class Logo extends Component {
  handleClick(evt) {
    Velocity(document.body, "scroll", { duration: 1000, easing: "easeInOutQuad" });
    this.props.showNav(false);
    evt.preventDefault();
    return false;
  }
  render() {
    return(
      <StyledLogo className={`${this.props.classes} grid-col-3 logo`} onClick={(evt) => this.handleClick(evt)}>
        <a href="#top">Stereo</a>
      </StyledLogo>
    );
  }
}

Logo.propTypes = {
  classes: PropTypes.string,
}

const mapDispatchToProps = (dispatch) => ({
  showNav: (show) => {
    dispatch(showNav(show))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Logo);
