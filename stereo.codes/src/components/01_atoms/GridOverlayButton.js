import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showGrid } from '../../actions/grid-actions';

class GridOverlayButton extends Component {
  componentWillMount() {
    this.setState({ isActive: false });
  }
  toggleButton() {
    const shouldActive = !this.props.gridOverlay.show ? true : false;
    this.setState({ isActive:  shouldActive});
    this.props.showGrid(shouldActive);
  }

  render() {
    const active = this.state.isActive ? 'active' : '';

    const ButtonStyled = styled.button`
      display: inline-block;
      background: ${this.state.isActive ? 'green' : 'var(--radish)'};
      color: white;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      text-transform: uppercase;
    `;
    return (
      <VelocityComponent animation={{ scale: [this.state.isActive ? 1.2 : 1, 'easeInCirc'] }} duration={500}>
        <StyledGridUI className={`${active} grid-overlay-ui about-button`}>
          <ButtonStyled onClick={this.toggleButton.bind(this)}>toggle grid</ButtonStyled>
        </StyledGridUI>
      </VelocityComponent>
    )
  }
}

GridOverlayButton.propTypes = {
  gridOverlay: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    gridOverlay: state.gridOverlay
  }
}
const mapDispatchToProps = (dispatch) => ({
  showGrid: (show) => {
    dispatch(showGrid(show))
  }
})
const StyledGridUI = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridOverlayButton)
