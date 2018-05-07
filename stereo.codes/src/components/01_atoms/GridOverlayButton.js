import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { gridActivate } from '../../actions/grid-actions';

class GridOverlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }
  toggleButton() {
    const shouldActive = !this.props.grid.activate ? true : false;
    this.setState({ isActive:  shouldActive});
    this.props.gridActivate(shouldActive);
  }

  render() {
    const { isActive } = this.state;
    const active = this.state.isActive ? 'active' : '';
    return (
      <StyledGridUI className={`${active} grid-overlay-ui about-button`}>
        <ButtonStyled
          onClick={this.toggleButton.bind(this)}
          isActive={isActive}
        ></ButtonStyled>
      </StyledGridUI>
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

const ButtonStyled = styled.button`
  display: inline-block;
  width: 30px;
  height: 20px;
  font-size: 16px;
  background: none;
  border: 1px solid;
  border-color: ${props => props.isActive ? 'rgb(var(--snow))' : 'rgb(var(--radish))'};
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  transition: all .4s;
  &:before{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: ${props => props.isActive ? 'rgb(var(--snow))' : 'rgb(var(--radish))'};
    position: absolute;
    top: 0;
    right: 9px;
    transition: all .4s;
  }
  @media screen and (min-width: 768px) {
    &:hover{
      border-color: rgb(var(--snow));
      &:before{
        background: rgb(var(--snow));
      }
    }
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridOverlayButton)
