import React, { Component } from 'react'
import {VelocityComponent} from 'velocity-react';

export default class GridOverlay extends Component {
  componentWillMount() {
    this.setState({ isActive: false });
  }
  toggleButton() {
    const shouldActive = !this.state.isActive ? true : false;
    this.setState({ isActive: shouldActive }, () => {
      document.body.classList.add('overlay');
      if (!this.state.isActive) {
        document.body.classList.remove('overlay');
      }
    });
  }

  render() {
    const active = this.state.isActive ? 'active' : '';
    return (
      <VelocityComponent animation={{ scale: [this.state.isActive ? 1.2 : 1, 'easeInCirc'] }} duration={500}>
        <div className={`${active} grid-overlay-ui`}>
          <button onClick={this.toggleButton.bind(this)}>toggle grid</button>
        </div>
      </VelocityComponent>
    )
  }
}
