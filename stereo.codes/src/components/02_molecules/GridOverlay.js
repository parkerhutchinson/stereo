import React, { Component } from 'react'

export default class GridOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleButton(e) {
    this.setState({ isActive:  !this.state.isActive});
    return false;
  }

  render() {
    return (
      <div className="grid-overlay">
        <button onClick={(e) => this.toggleButton(e)}>toggle</button>
      </div>
    )
  }
}
