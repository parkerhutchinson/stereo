import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const MediaBlock = (props) => {
  return (
    <StyledMediaBlock className="grid-col-8 grid-8 media-block" image={props.image}>
      <img src={props.image} className="grid-col-6"/>
      <StyledMediaCopy>
        <h3>{props.title}</h3>
      </StyledMediaCopy>
    </StyledMediaBlock>
  );
}

MediaBlock.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  url: PropTypes.string,
}

MediaBlock.defaultProps = {
  image: '',
  title: '',
  subTitle: '',
  url: '',
}

const StyledMediaBlock = styled.div`
  img{
    display: block;
    width: 100%;
    height: auto;
  }
`;
const StyledMediaCopy = styled.header`
  background: rgb(var(--snow));
  h3{
    color: rgb(var(--blueberry));
  }
`;

export default MediaBlock;