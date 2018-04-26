import React, { Component } from 'react';
import { connect } from 'react-redux';
import StereoGallery from '../03_organisms/StereoGallery';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Copy from '../03_organisms/Copy';
import NavLinkArrow from '../01_atoms/NavLinkArrow';
import HackImageLoader from '../02_molecules/HackImageLoader';
import { musicStore } from '../../store/connect-store';

class Connect extends Component {
  render() {
    const { section } = this.props;
    const inview = section.connect ? section.connect : null;
    const images = musicStore.map((img) => img.artwork);
    return (
      <React.Fragment>
        <StyledConnect className="grid-20 grid-col-20">
            <Copy
                title="Stereo's Stereo"
                subTitle="My Latest Tracks"
                grid={9}
                inview={inview}
                color="rgb(var(--snow))"
              >
                <p>My drive to code and design is only matched by my insatiable need to listen to music. When my cans go on its time to get -ish done. Checkout this small sample set of the top albums in my collection. </p>
              <NavLinkArrow
                url="https://open.spotify.com/user/phono_mono?si=hcW-WJ2UR_COLRXD3Rx6wg"
                title="My Spotify"
                target="_blank"
                classes="button"
              >
                <span className="button-arrow">
                  <span className="button-arrow-head"></span>
                </span>
              </NavLinkArrow>
            </Copy>
          <StereoGallery inview={inview}/>
        </StyledConnect>
        <HackImageLoader images={images} />
      </React.Fragment>
    )
  }
}

Connect.propTypes = {
  music: PropTypes.object,
  section: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    music: state.connect.music,
    section: state.section,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Connect);

const StyledConnect = styled.div`
  display: grid;
  grid-column-start: 3;
  align-content: stretch;
  grid-template-rows: 1fr;
  padding-bottom: 100px;
  margin-bottom: 50px;

  &.grid-20{
    align-items: center;
  }
  @media screen and (max-width: 768px){
    &.grid-20{
      grid-template-columns: repeat(16, 1fr);
      grid-column-start: 1;
      grid-column-end: span 18;
      grid-template-rows: auto;
    }
  }
  .copy-header.active{
    h1{transition-delay: 0s;}
    h3{transition-delay: .3s;}
  }
  .copy{
    &-wrap{
      .copy-content{transition-delay: .5s;}
    }
    .bg{transition-delay: .4s;}
    @media screen and (max-width: 768px) {
      grid-column-end: span 16;
    }
  }
  .stereo-gallery-wrap{
    grid-column-start: 12;
    grid-template-rows: 1fr;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;