import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';

const MediaBlock = (props) => {
  return (
    <StyledMediaBlock className="grid-col-8 grid-8 media-block" href={props.link}>
      <StyledSpotifyIcon />
      <img src={props.image} className="grid-col-7" alt={props.title}/>
      <StyledMediaCopy>
        <h2>{props.title}</h2>
        { props.subTitle ? (<h4>{ props.subTitle }</h4>) : null }
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
  url: '',
}

const StyledMediaBlock = styled.a`
  grid-template-rows: 1;
  display: grid;
  position: relative;
  z-index: ${zdepth('low')};
  img{
    display: block;
    width: 100%;
    height: auto;
    grid-row-start: 1;
    grid-column-start: 1;
    transform: translate3d(0,0,0) scale(1);
    transition: transform .8s var(--fastanimation);
  }
  @media screen and (min-width: 768px) {
    &:hover{
      h2, h4{
        color: rgb(var(--snow));
      }
      header{
        &:after{
          width: 100%;
        }
      }
      img{
        transform: translate3d(0,0,0) scale(1.1);
      }
    }
  }
`;
const StyledMediaCopy = styled.header`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  margin-top: 90px;
  padding: 30px;
  position: relative;
  h2,h4{
    position: relative;
    z-index: ${zdepth('mid')};
    will-change: color;
    transition: color .4s var(--fastanimation);
  }
  h2{
    text-transform: capitalize;
    font-size: 2.4rem;
    color: rgb(var(--blueberry));
  }
  h4{
    color: rgb(var(--radish));
    text-transform: uppercase;
    margin-top: 15px;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(var(--snow));
    z-index: ${zdepth('low')};
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: rgb(var(--radish));
    z-index: ${zdepth('low')};
    will-change: width;
    transition: width .4s var(--fastanimation);
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