import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import CopyHeader from '../02_molecules/CopyHeader';
const copyWrapPadding = '60px';
const copyWrapPaddingMobile = '35px';


export default class Copy extends Component {
  render() {
    const { grid, classes, subTitle, title, inview, color } = this.props;
    const gridContent = grid - 2;

    return (
      <StyledCopy className={`${classes} grid-col-${grid} copy`} color={color} inview={inview}>
        <div className={`grid-col-${grid} copy-wrap`}>
          <CopyHeader
            title={ title }
            subTitle={ subTitle }
            className={`${classes}`}
            grid={grid}
            inview={inview}
            color={color}
          />
          <div className="copy-content">
            {this.props.children}
          </div>
        </div>
        <span className={`grid-col-${gridContent} bg`}></span>
      </StyledCopy>
    )
  }
}

Copy.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  grid: PropTypes.number,
  classes: PropTypes.string,
  inview: PropTypes.bool,
  color: PropTypes.string,
}

Copy.defaultProps = {
  title: '',
  classes: '',
  grid: 8,
  inview: false,
  color: 'var(--snow)',
}

const StyledCopy = styled.article`
  position: relative;
  align-items: start;
  color: ${props => props.color};
  p{
    font-size: 1.2rem;
    line-height: 2.2;
    margin-bottom: 50px;
    strong{
      font-weight: bold;
      display: inline-block;
      min-width: 73px;
    }
  }
  .copy-wrap{
    position: relative;
    z-index: 2;
    padding: ${copyWrapPadding} 0 ${copyWrapPadding} 0;
    .copy-content{
      padding: 0 11.50% 5px;
      opacity: ${props => props.inview ? '1' : '0'};
      transition: opacity var(--fastanimation) .6s;
      transition-delay: ${props => props.inview ? '1.2s' : '0s'};
    }
    @media screen and (max-width: 768px) {
      padding: ${copyWrapPaddingMobile} 0 ${copyWrapPaddingMobile} 0;
    }
  }
  .bg{
    background: var(--stormy);
    position: absolute;
    top: 0;
    right: 0;
    width: 77.85%;
    height: 100%;
    z-index: 1;
    opacity: ${props => props.inview ? '1' : '0'};
    clip-path: ${props => props.inview ? 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' : 'polygon(70% 0%, 100% 0%, 100% 100%, 100% 100%)'};
    transition: all var(--fastanimation) .9s;
    transition-delay: ${props => props.inview ? '1s' : '0s'};
  }
`;
