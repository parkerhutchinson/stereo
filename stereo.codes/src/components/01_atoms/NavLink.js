import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showNav } from '../../actions/navigation-actions';
const Velocity = require('velocity-animate');

class NavLink extends Component {
  constructor(props){
    super(props)
    this.handleScrollTo.bind(this);
  }
  handleScrollTo(evt,url) {
    const scrollToElem = document.querySelector(url);
    this.props.showNav(false);
    Velocity(scrollToElem, "scroll", { duration: 1500, offset: -150, easing: "easeOutCirc" });

    evt.preventDefault();
    return false;
  }
  render() {
    return (
      <a
        href={this.props.url}
        onClick={(evt) => this.handleScrollTo(evt, this.props.url)}
      ><span>{ this.props.title }</span></a>
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

const mapDispatchToProps = (dispatch) => ({
  showNav: (show) => {
    dispatch(showNav(show))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(NavLink)
