import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaBlock from '../02_molecules/MediaBlock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  getNextMusicSelection,
  getPrevMusicSelection
} from '../../actions/connact-action';
import { zdepth } from '../../lib/styled-helpers';

class StereoGallery extends Component {
  getMediaBlocks(music) {
    return (
      <MediaBlock
        image={music.artwork}
        key={music.name}
        link={music.link}
      />
    );
  }
  getMediaMeta(music) {
    let musicIndex = music.id;
    const nextId = musicIndex + 1;
    const prevId = musicIndex - 1;
    return (
      <div className="meta-container" key={music.name}>
        <StyledMediaCopy>
          <h2>{music.name}</h2>
          { music.album ? (<h4>{ music.album }</h4>) : null }
        </StyledMediaCopy>
        <div className="album-nav">
          { this.getAlbumPosition(music.albumL, music.id) }
          <a href="#prev" onClick={ (e) => this.getPrevMusic(e, prevId) } className="arrows arrows-prev">
            <span className="head"></span>
          </a>
          <a href="#next" onClick={ (e) => this.getNextMusic(e, nextId) } className="arrows arrows-next">
            <span className="head"></span>
          </a>
        </div>
      </div>
    )
  }
  getAlbumPosition(pos, id) {
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
  getNextMusic(e, id) {
    this.props.getNextMusicSelection(id);
    e.preventDefault();
  }
  getPrevMusic(e, id) {
    this.props.getPrevMusicSelection(id);
    e.preventDefault();
  }
  render() {
    const { music } = this.props;

    return (
      <React.Fragment>
        <StyledStereoGallery className="stereo-gallery-wrap grid-col-9 grid-9">
          <ReactCSSTransitionGroup
            component="div"
            className="block grid-col-9"
            transitionName="stereo-gallery-block"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1500}
          >
            { this.getMediaBlocks(music) }
          </ReactCSSTransitionGroup>
          <div className="meta grid-col-5">
            <ReactCSSTransitionGroup
              component="header"
              transitionName="stereo-gallery-meta"
              transitionEnterTimeout={1500}
              transitionLeaveTimeout={1500}
            >
              { this.getMediaMeta(music) }
            </ReactCSSTransitionGroup>
          </div>
        </StyledStereoGallery>
      </React.Fragment>
    )
  }
}

StereoGallery.propTypes = {
  music: PropTypes.object.isRequired,
}

StereoGallery.defaultProps = {
  music: [],
}

const mapStateToProps = (state) => {
  return {
    music: state.connect.music,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNextMusicSelection: (id) => {
    dispatch(getNextMusicSelection(id))
  },
  getPrevMusicSelection: (id) => {
    dispatch(getPrevMusicSelection(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StereoGallery);

const StyledStereoGallery = styled.aside`
  position: relative;
  grid-template-rows: 1fr;
  .meta, .block{
    position: relative;
    grid-row-end: 1;
  }
  .block{
    grid-column-start: 1;
    grid-column-end: 10;
    z-index: ${zdepth('low')}
  }
  .meta{
    grid-column-start: 5;
    grid-column-end: 10;
    z-index: ${zdepth('mid')};
    margin-top: 60px;
    background: rgb(var(--snow));
    a{
      cursor: pointer;
    }
    a.arrows{
      pointer-events: auto;
    }
  }
  .stereo-gallery-block,.stereo-gallery-meta{
    position: relative;
    width: 100%;
    a.arrows{
      pointer-events: none;
    }
    &-enter{
      position: absolute;
      top: 0;
      left: 0;
      opacity: .01;
      width: 100%;
      transition: opacity .4s var(--fastanimation);
      h2{
        top: 40px;
        transition: top .4s var(--fastanimation);
      }
      &-active{
        opacity: 1;
        h2{
          top: 0px;
        }
      }
    }
    &-leave{
      opacity: 1;
      top: 0;
      left: 0;
      transition: opacity .2s var(--fastanimation);
      &-active{
        opacity: 0;
      }
    }
  }
  .album-nav{
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
  }
`;

const StyledMediaCopy = styled.a`
  padding: 30px;
  position: relative;
  display: block;
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