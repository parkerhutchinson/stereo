import React from 'react';
import { zdepth } from '../../lib/styled-helpers';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getAlbumPosition = (pos, id) => {
  const list = Array.from(Array(pos).keys()).map((listItem, i) => {
    if (id === i) {
      return (<li className="active" key={i}></li>)
    } else {
      return (<li key={i}></li>)
    }
  });
  return (
    <ul>
      { list }
    </ul>
  )
}

const nextFunc = (e, props) => {
  props.next();
  e.preventDefault();
}

const prevFunc = (e, props) => {
  props.prev();
  e.preventDefault();
}

const StereoGalleryNav = (props) => {
  const { music } = props;
  return (
    <StyledGalleryNav>
      { getAlbumPosition(music.albumL, music.id) }
      <a href="#prev" onClick={ (e) => prevFunc(e, props) } className="arrows arrows-prev">
        <span className="head"></span>
      </a>
      <a href="#next" onClick={ (e) => nextFunc(e, props) } className="arrows arrows-next">
        <span className="head"></span>
      </a>
    </StyledGalleryNav>
  )
}

StereoGalleryNav.propTypes = {
  music: PropTypes.object.isRequired,
  prev: PropTypes.func,
  next: PropTypes.func,
}

StereoGalleryNav.defaultProps = {
  music: {},
}

export default StereoGalleryNav;

const StyledGalleryNav = styled.nav`
  background: rgb(var(--snow));
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  a.arrows{
    display: inline-block;
    height: 30px;
    width: 40px;
    color: rbg(var(--snow));
    position: relative;
    overflow: hidden;
    padding: 5px;
    &:before{
      content: '';
      display: inline-block;
      height: 0px;
      border-bottom: 1px solid rgb(var(--radish));
      stroke-linecap: round;
      width: calc(100% - 10px);
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      z-index: ${zdepth('low')};
      transition: all .4s;
    }
    .head{
      position: absolute;
      z-index: ${zdepth('mid')};
      top: 50%;
      right: 8px;
      height: 15px;
      width: 15px;
      transform: translateY(-50%) rotate(-45deg);
      border-right: 1px solid rgb(var(--radish));
      border-bottom: 1px solid rgb(var(--radish));
      stroke-linecap: round;
      transition: all .4s;
    }
    &-prev{
      transform: rotate(180deg);
      margin-right: 10px;
    }
    &:hover{
      &:before{
        border-color: rgb(var(--blueberry));
      }
      .head{
        border-color: rgb(var(--blueberry));
      }
    }
  }
  ul{
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100% - 120px);
    height: 7px;
    margin-right: 10px;
    padding: 0;
    overflow: hidden;
  }
  ul li{
    display: block;
    background: grey;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transition: all .4s;
    &.active{
      width: 7px;
      height: 7px;
      background: rgb(var(--radish));
    }
  }
`;