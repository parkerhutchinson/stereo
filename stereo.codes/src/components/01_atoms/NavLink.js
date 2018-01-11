import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Velocity = require('velocity-animate');

export default class NavLink extends Component {
  constructor(props){
    super(props)
    this.handleScrollTo.bind(this);
  }
  handleScrollTo(evt,url) {
    const scrollToElem = document.querySelector(url);

    Velocity(scrollToElem, "scroll", { duration: 1200, easing: "easeInOutCirc" });

    evt.preventDefault();
    return false;
  }
  render() {
    return (
      <a
        href={this.props.url}
        onClick={(evt) => this.handleScrollTo(evt, this.props.url)}
      >{ this.props.title }</a>
    )
  }
}

NavLink.defaultProps = {
  url: '',
  title: '',
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
