import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { zdepth } from '../../lib/styled-helpers';


class CopyPaginator extends Component {
  constructor() {
    super();
    this.state = {
      block: 0,
    }
  }
  
  getBlocks = (blocks, index) => {
    return blocks[index];
  }
  
  navigateBlock = (blocks, dir) => {
    const { block } = this.state;
    const blocksL = blocks.length - 1;
    const blockI = block;
    const nextBlock = (block + 1) > blocksL ? blocksL : blockI + 1 ;
    const prevBlock = (block - 1) < 0 ? 0 : blockI - 1;

    if (dir === 'next') {
      this.setState({ block: nextBlock });
    }
    if (dir === 'prev') {
      this.setState({ block: prevBlock });
    }

  }

  render() {
    const { blocks } = this.props;
    const { block } = this.state;
    const prevButton = (<a href="#prev" className="prev" onClick={() => this.navigateBlock(blocks, 'prev')}><span></span></a>);
    const nextButton = (<a href="#next" className="next" onClick={() => this.navigateBlock(blocks, 'next')}><span></span></a>);

    return(
      <StyledCopyPaginator>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="copypaginator"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          className="paginationTransition"
        >
          { this.getBlocks(blocks, block) }
        </ReactCSSTransitionGroup>
        <StyledPaginatorNav>
        { block !== 0 ? prevButton : null}
        <h5>{ block + 1} / {blocks.length}</h5>
        { block !== blocks.length - 1 ? nextButton : null}
        </StyledPaginatorNav>
      </StyledCopyPaginator>
    )
  }
}

CopyPaginator.propTypes = {
  blocks: PropTypes.array.isRequired,
}

export default CopyPaginator;

const StyledCopyPaginator = styled.div`
  position: relative;
  .paginationTransition{
    position: relative;
    .copy-block{
      background: rgb(var(--snow));
      
    }
  }
  .copypaginator{
    &-enter{
      position: relative;
      opacity: 0;
      background: rgb(var(--snow));
      z-index: ${zdepth('mid')};
      &-active{
        opacity: 1;
        transition: all .6s;
      }
    }
    &-leave{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgb(var(--snow));
      z-index: ${zdepth('lowest')};
      opacity: 1;
      &-active{
        opacity: 0;
        transition: all .6s;
      }
    }
  }
`;

const StyledPaginatorNav = styled.nav`
  position: absolute;
  bottom: -30px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5{
    color: rgb(var(--radish));
    display: inline-block;
    text-align: center;
    padding: 0 10px;
  }
  a{
    position: relative;
    color: rgb(var(--radish));
    z-index: ${zdepth('high')};
    display: inline-block;
    width: 20px;
    height: 20px;
    transition: all .4s;
    transform: scale(.8) rotate(0deg);
    overflow: hidden;
    &:before{
      content: '';
      display: inline-block;
      height: 0px;
      border-bottom: 1px solid rgb(var(--radish));
      stroke-linecap: round;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: ${zdepth('low')};
      transition: all .4s;
    }
    span{
      position: absolute;
      z-index: ${zdepth('mid')};
      top: 50%;
      right: 2px;
      height: 12px;
      width: 12px;
      transform: translateY(-50%) rotate(-45deg);
      border-right: 1px solid rgb(var(--radish));
      border-bottom: 1px solid rgb(var(--radish));
      stroke-linecap: round;
      transition: all .4s;
    }
    &.prev{
      transform: scale(.8) rotate(-180deg);
    }
    @media screen and (min-width: 768px) {
      &:hover{
        transform: scale(1);
        &.prev{
          transform: scale(1) rotate(-180deg);
        }
      }
    }
  }
`;