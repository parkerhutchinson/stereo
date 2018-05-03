import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';

const MediaBlock = (props) => {
  return (
    <StyledMediaBlock className="grid-col-9 grid-9 media-block" href={props.link} img={props.image}>
      <StyledSpotifyIcon />
      <div className="img"></div>
    </StyledMediaBlock>
  );
}

MediaBlock.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
}

MediaBlock.defaultProps = {
  image: '',
  url: '',
}

const StyledMediaBlock = styled.a`
  position: relative;
  z-index: ${zdepth('low')};
  width: 100%;
  height: 400px;
  .img{
    display: block;
    height: 100%;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: span 8;
    background: url(${props => props.img}) no-repeat center;
    background-size: cover;
    transform: translate3d(0,0,0) scale(1);
    transition: transform .8s var(--fastanimation);
  }
`;
const StyledSpotifyIcon = styled.i`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: ${zdepth('high')};
  background: url(./images/connect/icn-spotify.svg);
  background-size: contain;
`;
export default MediaBlock;