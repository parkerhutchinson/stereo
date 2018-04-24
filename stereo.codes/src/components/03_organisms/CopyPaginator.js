import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
    const nextBlock = (block + 1) > blocksL ? 0 : blockI + 1 ;
    const prevBlock = (block - 1) < 0 ? blocksL : blockI - 1;

    if (dir === 'next') {
      this.setState({ block: nextBlock });
    }
    if (dir === 'prev') {
      this.setState({ block: prevBlock });
    }

  }

  render() {
    const { blocks } = this.props;
    return(
      <StyledCopyPaginator>
        { this.getBlocks(blocks, this.state.block) }
        <a href="#next" onClick={() => this.navigateBlock(blocks, 'prev')}>Prev Page</a>
        <a href="#next" onClick={() => this.navigateBlock(blocks, 'next')}>Next Page</a>
      </StyledCopyPaginator>
    )
  }
}

CopyPaginator.propTypes = {
  blocks: PropTypes.array.isRequired,
}

export default CopyPaginator;

const StyledCopyPaginator = styled.div`
  a{
    color: rgb(var(--radish));
  }
`;