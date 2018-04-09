import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';

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
  z-index: ${zdepth('mid')};
  top: 30px;
  right: 30px;
  display: flex;
  align-items: stretch;
  opacity: ${props => props.show ? '1' : '0'};
  transition: all .5s var(--fastanimation);
  transition-delay: ${props => props.show ? '1s' : '0s'};
  li{
    align-items: center;
    &:first-child{margin-right: 15px;}
  }
  li a{
    position: relative;
    color: ${props => props.color};
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: color .4s;
    &:hover{
      color: rgb(var(--radish));
    }
  }
  li:last-child{
    span{
      display: inline-block;
      padding: 9px 5px 8px;
      line-height: 0;
      border: 1px solid ${props => props.color};
      font-size:.8rem;
      color: ${props => props.color};
      border-radius: 3px;
      text-transform: uppercase;
    }
  }
`;
