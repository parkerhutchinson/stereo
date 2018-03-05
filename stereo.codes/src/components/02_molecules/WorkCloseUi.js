import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

export default class WorkCloseUI extends Component {
  handleClick(evt) {
    this.props.clicked();
    evt.preventDefault();
  }
  render() {
    const { className, show, color } = this.props;
    return(
      <StyledOverlayUI className={className} show={show} color={color}>
        <li><a href="#close" onClick={(evt) => this.handleClick(evt)}>CLOSE</a></li>
        <li><span>esc</span></li>
      </StyledOverlayUI>
    )
  }
}

WorkCloseUI.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  clicked: PropTypes.func,
}

WorkCloseUI.defaultProps = {
  show: false,
}

const StyledOverlayUI = styled.ul`
  position: absolute;
  z-index: 999;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: stretch;
  opacity: ${props => props.show ? '1' : '0'};
  transition: all .5s var(--fastanimation);
  transition-delay: ${props => props.show ? '1s' : '0s'};
  li{
    display: flex;
    align-items: center;
    &:first-child{margin-right: 15px;}
  }
  li a{
    position: relative;
    color: ${props => props.color};
    font-size: 1.1rem;
    padding-bottom: 3px;
    &:before{
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: ${props => props.color};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  li:last-child{
    span{
      display: inline-block;
      padding: 6px 3px;
      border: 1px solid ${props => props.color};
      font-size: .8rem;
      color: ${props => props.color};
      border-radius: 3px;
    }
  }
`;
