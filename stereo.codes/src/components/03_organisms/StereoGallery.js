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
    return music.map((artist) =>
    <MediaBlock
      title={artist.name}
      subTitle={artist.album}
      image={artist.artwork}
      key={artist.name}
      link={artist.link}
    />)
  }
  render() {
    const { music } = this.props;
    return (
      <React.Fragment>
        <StyledStereoGallery className="grid-col-8">
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
  music: PropTypes.array.isRequired,
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

`;