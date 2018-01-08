import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './GridOverlay.scss';

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
      <div className={`${active} grid-overlay-ui`}>
        <button onClick={this.toggleButton.bind(this)}>toggle grid</button>
      </div>
    )
  }
}
