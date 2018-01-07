import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class GridOverlay extends Component {
  constructor(props) {
    super(props);
    this.setState({isActive: false});
    this.toggleButton.bind(this)
  }

  toggleButton() {
    this.setState({isActive: this.state.isActive ? false : true});
  }

  render() {
    return (
      <div className="grid-overlay">
        <button onClick={this.toggleButton()}>toggle</button>
      </div>
    )
  }
}
