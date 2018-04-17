import React, { Component } from 'react';
import { connect } from 'react-redux';
import StereoGallery from '../03_organisms/StereoGallery';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Copy from '../03_organisms/Copy';

class Connect extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledConnect className="grid-18 grid-col-18">
            <Copy
                title="Stereo's Stereo"
                subTitle="My Latest Tracks"
                grid={8}
                inview={true}
                color="rgb(var(--snow))"
              >
                <p>This is our world now. The world of the electron and the
              switch; the beauty of the baud. We exist without nationality,
              skin color, or religious bias.</p>
            </Copy>
          <StereoGallery />
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
  grid-column-start: 4;
  align-content: stretch;
  grid-column-rows: auto;
  grid-row-gap: 120px;
  padding-bottom: 100px;
  align-items: center;
  a:nth-of-type(2n + 1){
    grid-column-start: 11;
  }
`;
const StyledConnectIntro = styled.header`
  align-self: center;
`;