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
    const prevButton = (<a href="#prev" onClick={() => this.navigateBlock(blocks, 'prev')}>Prev Page</a>);
    const nextButton = (<a href="#next" onClick={() => this.navigateBlock(blocks, 'next')}>Next Page</a>);
    
    return(
      <StyledCopyPaginator>
        { block !== 0 ? prevButton : null}
        <ReactCSSTransitionGroup
          component="div"
          transitionName="copypaginator"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={400}
        >
          { this.getBlocks(blocks, block) }
        </ReactCSSTransitionGroup>
        { block !== blocks.length - 1 ? nextButton : null}
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
  .copypaginator{
    &-enter{
      position: relative;
      opacity: 0;
      background: rgb(var(--snow));
      transition: opacity .8s;
      z-index: ${zdepth('mid')};
      &-active{
        opacity: 1;
      }
    }
    &-leave{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgb(var(--snow));
      z-index: ${zdepth('low')};
      opacity: 1;
      &-active{
        opacity: 0;
      }
    }
  }
  a{
    color: rgb(var(--radish));
  }
`;