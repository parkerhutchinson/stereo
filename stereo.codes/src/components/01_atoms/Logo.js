import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { showNav } from '../../actions/navigation-actions';
import { connect } from 'react-redux';
const Velocity = require('velocity-animate');


class Logo extends Component {
  handleClick(evt) {
    Velocity(document.body, "scroll", { duration: 1000, easing: "easeInOutQuad" });
    this.props.showNav(false);
    evt.preventDefault();
    return false;
  }
  render() {
    return(
      <h1 className={`${this.props.classes} grid-col-3 logo`} onClick={(evt) => this.handleClick(evt)}>
        <a href="#top">Stereo</a>
      </h1>
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
