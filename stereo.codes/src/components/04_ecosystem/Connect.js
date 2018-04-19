import React, { Component } from 'react';
import { connect } from 'react-redux';
import StereoGallery from '../03_organisms/StereoGallery';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Copy from '../03_organisms/Copy';

class Connect extends Component {
  render() {
    const { section } = this.props;
    const inview = section.connect ? section.connect : null;
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
                <p>This is our world now. The world of the electron and the
              switch; the beauty of the baud. We exist without nationality,
              skin color, or religious bias.</p>
            </Copy>
          <StereoGallery inview={inview}/>
        </StyledConnect>
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
  grid-column-start: 3;
  align-content: stretch;
  grid-template-rows: 1fr;
  grid-row-gap: 120px;
  padding-bottom: 100px;
  .copy-header.active{
    h1{transition-delay: 0s;}
    h3{transition-delay: .3s;}
  }
  .copy{
    &-wrap{
      .copy-content{transition-delay: .5s;}
    }
    .bg{transition-delay: .4s;}
  }
  &.grid-20{
    align-items: center;
  }
  .stereo-gallery-wrap{
    grid-column-start: 12;
    grid-template-rows: 1fr;
  }
`;