import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaBlock from '../02_molecules/MediaBlock';
import StereoGalleryNav from '../02_molecules/StereoGalleryNav';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
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
    return (
      <StyledMediaCopy key={music.name}>
        <h2>{music.name}</h2>
        { music.album ? (<h4>{ music.album }</h4>) : null }
      </StyledMediaCopy>
    )
  }
  preventClick() {
    console.log(ReactDOM.findDOMNode(this.refs.meta));
    ReactDOM.findDOMNode(this.refs.meta).classList.add('noclick');
    setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.meta).classList.remove('noclick');
    }, 900);
  }
  getNextMusic(id) {
    this.props.getNextMusicSelection(id);
    this.preventClick();
  }
  getPrevMusic(id) {
    this.props.getPrevMusicSelection(id);
    this.preventClick();
  }
  render() {
    const { music, inview } = this.props;
    let musicIndex = music.id;
    const nextId = musicIndex + 1;
    const prevId = musicIndex - 1;

    return (
      <React.Fragment>
        <StyledStereoGallery className="stereo-gallery-wrap grid-col-9 grid-9" inview={inview}>
          <ReactCSSTransitionGroup
            component="div"
            className="block grid-col-9"
            transitionName="stereo-gallery-block"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            { this.getMediaBlocks(music) }
          </ReactCSSTransitionGroup>
          <div className="meta grid-col-5" ref="meta">
            <ReactCSSTransitionGroup
              component="header"
              transitionName="stereo-gallery-meta"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}
            >
              { this.getMediaMeta(music) }
            </ReactCSSTransitionGroup>
            <StereoGalleryNav
              music={music}
              prev={() => this.getPrevMusic(prevId)}
              next={() => this.getNextMusic(nextId)}
            />
          </div>
        </StyledStereoGallery>
      </React.Fragment>
    )
  }
}

StereoGallery.propTypes = {
  music: PropTypes.object.isRequired,
  inview: PropTypes.bool,
}

StereoGallery.defaultProps = {
  music: [],
  inview: false,
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
  opacity: ${props => props.inview ? '1' : '0'};
  top: ${props => props.inview ? '0' : '50px'};
  transition: all .4s;
  transition-delay: ${props => props.inview ? '1.1s' : '0s'};
  .meta, .block{
    position: relative;
    grid-row-end: 1;
  }
  .block{
    grid-column-start: 1;
    grid-column-end: 10;
    z-index: ${zdepth('low')};
    position: relative;
    height: 513px;
    transform: translate3d(0,0,0) scale(1);
    transition: transform .5s var(--fastanimation);
    a{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      &:hover{
        transform: translate3d(0,0,0) scale(1.1);
      }
    }
  }
  .meta{
    grid-column-start: 5;
    grid-column-end: 10;
    z-index: ${zdepth('mid')};
    margin-top: 90px;
    background: rgb(var(--snow));
    position: relative;
    min-height: 173px;
    &.noclick a{pointer-events: none;}
    header{
      position: relative;
      height: 123px;
      overflow: hidden;
    }
    a{
      cursor: pointer;
    }
    opacity: ${props => props.inview ? '1' : '0'};
    top: ${props => props.inview ? '0' : '50px'};
    transition: all .4s;
    transition-delay: ${props => props.inview ? '1.4s' : '0s'};
  }
  .stereo-gallery-block{
    &-enter{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: ${zdepth('high')};
      transform: translate3d(0,0,0);
      clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 100% 100%);
      opacity: 0;
      transition: clip-path .4s var(--fastanimation), opacity .2s;
      &-active{
        clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
        opacity: 1;
      }
    }
    &-leave{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: ${zdepth('low')};
      opacity: 1;
      transition: opacity .4s;
      &-active{
        opacity: 0;
      }
    }
  }
`;


const StyledMediaCopy = styled.a`
  padding: 30px;
  position: relative;
  display: block;
  background: rgb(var(--snow));
  transform: translate3d(0,0,0);
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
  &.stereo-gallery-meta{
    &-enter{
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all .8s var(--fastanimation);
      &-active{
        opacity: 1;
        top: 0;
      }
    }
    &-leave{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: all .8s var(--fastanimation);
      &-active{
        opacity: 0;
        top: -40px;
      }
    }
  }
`;
