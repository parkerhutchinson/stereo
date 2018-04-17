import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MediaBlock from '../02_molecules/MediaBlock';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  getNextMusicSelection,
  getPrevMusicSelection
} from '../../actions/connact-action';

class StereoGallery extends Component {
  getMediaBlocks(music) {
    return (<MediaBlock
      title={music.name}
      subTitle={music.album}
      image={music.artwork}
      key={music.name}
      link={music.link}
    />);
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
        <StyledStereoGallery className="grid-col-8">
          <a href="#next" onClick={ (e) => this.getNextMusic(e, nextId) }>Next</a>
          <a href="#prev" onClick={ (e) => this.getPrevMusic(e, prevId) }>Prev</a>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="stereo-gallery"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            { this.getMediaBlocks(music) }
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
  .stereo-gallery{
    background: red;
  }
`;