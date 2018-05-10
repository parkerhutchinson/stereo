import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigationOpen } from '../../actions/navigation-actions';
import styled from 'styled-components';
const Velocity = require('velocity-animate');


class NavLink extends Component {
  handleScrollTo(evt,url) {
    const scrollToElem = document.querySelector(url);
    this.props.navigationOpen(false);
    Velocity(scrollToElem, "scroll",  {
      duration: 1500,
      queue: false,
      offset: -150,
      easing: "easeOutCirc",
      mobileHA: false
    });

    evt.preventDefault();
    return false;
  }
  render() {
    return (
      <LinkStyled
        href={this.props.url}
        onClick={(evt) => this.handleScrollTo(evt, this.props.url)}
        className={`${this.props.classes}`}
      >
        <span className="button-text">{ this.props.title }</span>
        { this.props.children }
      </LinkStyled>
    )
  }
}

NavLink.defaultProps = {
  url: '',
  title: '',
  classes: '',
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
  navigationOpen: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  navigationOpen: (show) => {
    dispatch(navigationOpen(show))
  }
})

const LinkStyled = styled.a`
  opacity: .8;
  transition: all .4s;
  letter-spacing: 1px;
  &:hover,&.active{
    opacity: 1;
  }
`;

export default connect(
  null,
  mapDispatchToProps
)(NavLink)
