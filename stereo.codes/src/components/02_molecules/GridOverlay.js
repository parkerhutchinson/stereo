import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import GridOverlayButton from '../01_atoms/GridOverlayButton';

class GridOverlay extends Component {
  createGrid() {
    const { gridCount } = this.props;

    return Array.from({length: gridCount}).map((v, i) => {
      if (i > 18) {
        return (<div className="grid-col hide" key={i}></div>)
      } else {
        return (<div className="grid-col" key={i}></div>)
      }
    })
  }
  render() {
    return (
      <div className="grid-ui">
        <StyledGridOverlay className={`${this.props.isActive ? 'active' : ''} grid-overlay`}>
          {this.createGrid()}
        </StyledGridOverlay>
        <GridOverlayButton />
      </div>
    )
  }
}

GridOverlay.propTypes = {
  gridCount: PropTypes.number,
  isActive: PropTypes.bool,
}

GridOverlay.defaultProps = {
  gridCount: 24,
  isActive: false,
}

const mapStateToProps = (state) => {
  return {
    isActive: state.gridOverlay.show,
  }
}

const StyledGridOverlay = styled.div`
  display: none;
  grid-template-columns: repeat(24, 1fr);
  @media screen and (max-width: 768px) {grid-template-columns: repeat(18, 1fr);}
  pointer-events: none;
  position: fixed;
  z-index: 9999999999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  &.active{
    display: grid;
  }
  .grid-col{
    border-right: 1px solid red;
    &:last-child{border: none;}
    &.mobile{
      @media screen and (max-width: 768px) {display: none;}
    }
  }
`;

export default connect(
  mapStateToProps,
  null
)(GridOverlay);
