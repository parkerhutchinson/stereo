import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

class WorkCloseUI extends Component {
  render() {
    return(
      <StyledOverlayUI>
        <li><a href="#close" onClick={(evt) => this.closeProject(evt)}>CLOSE</a></li>
        <li><span>esc</span></li>
      </StyledOverlayUI>
    )
  }
}

const StyledOverlayUI = styled.ul`
  position: absolute;
  z-index: 999;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: stretch;
  li{
    display: flex;
    align-items: center;
    &:first-child{margin-right: 15px;}
  }
  li a{
    position: relative;
    color: var(--stormy);
    font-size: 1.1rem;
    padding-bottom: 3px;
    &:before{
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: var(--stormy);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  li:last-child{
    span{
      display: inline-block;
      padding: 6px 3px;
      border: 1px solid var(--stormy);
      font-size: .8rem;
      color: var(--stormy);
      border-radius: 3px;
    }
  }
`;
