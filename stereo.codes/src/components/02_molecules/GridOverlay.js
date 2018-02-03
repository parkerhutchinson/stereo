import React, { Component } from 'react'
import {VelocityComponent} from 'velocity-react';
import styled from 'styled-components';


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
        <StyledGridUI className={`${active} grid-overlay-ui about-button`}>
          <button onClick={this.toggleButton.bind(this)}>toggle grid</button>
        </StyledGridUI>
      </VelocityComponent>
    )
  }
}

const StyledGridUI = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  button{
    display: inline-block;
    background: $radish;
    color: white;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
  }
  &.active{
    button{
      background: green;
    }
  }
`;
