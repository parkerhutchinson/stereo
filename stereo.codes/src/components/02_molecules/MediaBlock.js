import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';

const MediaBlock = (props) => {
  return (
    <StyledMediaBlock className="media-block" href={props.link} img={props.image}>
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
  .img{
    position: absolute; 
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: url(${props => props.img}) no-repeat center;
    background-size: cover;
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