import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { gridActivate } from '../../actions/grid-actions';

class GridOverlayButton extends Component {
  componentWillMount() {
    this.setState({ isActive: false });
  }
  toggleButton() {
    const shouldActive = !this.props.grid.activate ? true : false;
    this.setState({ isActive:  shouldActive});
    this.props.gridActivate(shouldActive);
  }

  render() {
    const active = this.state.isActive ? 'active' : '';
    const ButtonStyled = styled.button`
      display: inline-block;
      background: ${this.state.isActive ? 'rgb(var(--snow))' : 'rgb(var(--radish))'};
      color: ${this.state.isActive ? 'rgb(var(--radish))' : 'rgb(var(--snow))'};
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      text-transform: uppercase;
    `;

    return (
      <VelocityComponent animation={{ scale: [this.state.isActive ? 1.2 : 1, 'easeInCirc'] }} duration={500}>
        <StyledGridUI className={`${active} grid-overlay-ui about-button`}>
          <ButtonStyled onClick={this.toggleButton.bind(this)}>G</ButtonStyled>
        </StyledGridUI>
      </VelocityComponent>
    )
  }
}

GridOverlayButton.propTypes = {
  grid: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    grid: state.grid
  }
}
const mapDispatchToProps = (dispatch) => ({
  gridActivate: (activate) => {
    dispatch(gridActivate(activate))
  }
})
const StyledGridUI = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* lol i know right? */
  z-index: 99999999999;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridOverlayButton)
