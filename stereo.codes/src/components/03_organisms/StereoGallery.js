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
    return (
      <StyledMediaCopy key={music.name}>
        <h2>{music.name}</h2>
        { music.album ? (<h4>{ music.album }</h4>) : null }
      </StyledMediaCopy>
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
    let musicIndex = music.id;
    const nextId = musicIndex + 1;
    const prevId = musicIndex - 1;

    return (
      <React.Fragment>
        <StyledStereoGallery className="stereo-gallery-wrap grid-col-9">
          <a href="#next" onClick={ (e) => this.getNextMusic(e, nextId) }>Next</a>
          <a href="#prev" onClick={ (e) => this.getPrevMusic(e, prevId) }>Prev</a>
          <ReactCSSTransitionGroup
            component="div"
            className="block grid-col-9"
            transitionName="stereo-gallery-block"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={300}
          >
            { this.getMediaBlocks(music) }
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            component="div"
            className="meta grid-col-5"
            transitionName="stereo-gallery-meta"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={300}
          >
            { this.getMediaMeta(music) }
          </ReactCSSTransitionGroup>
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
  .stereo-gallery-block,.stereo-gallery-meta{
    background: red;
    &-enter{
      background: red;
      &-active{
        background: red;
      }
    }
    &-leave{
      background: green;
    }
  }
`;

const StyledMediaCopy = styled.header`
  grid-column-start: 6;
  grid-column-end: 10;
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