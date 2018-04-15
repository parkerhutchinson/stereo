import React, { Component } from 'react';
import MediaBlock from '../02_molecules/MediaBlock';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Connect extends Component {
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
        <StyledConnect className="grid-18 grid-col-18">
          <StyledConnectIntro className="grid-col-8">
            <h1>Music That<br/>Drives Me.</h1>
          </StyledConnectIntro>
          { this.getMediaBlocks(music) }
        </StyledConnect>
      </React.Fragment>
    )
  }
}

Connect.propTypes = {
  music: PropTypes.array,
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
  a:nth-of-type(2n + 1){
    grid-column-start: 11;
  }
`;
const StyledConnectIntro = styled.header`
  align-self: center;
  h1{
    color: rgb(var(--snow));
    padding-left: 50px;
    position: relative;
    &:before{
      content: '';
      display: block;
      position: absolute;
      width: 40px;
      height: 1px;
      background: rgb(var(--radish));
      top: 40px;
      left: 0;
      transition: width var(--fastanimation) .4s;
      transition-delay: 0s;
      @media screen and (max-width: 768px) {
        top: 22px;
      }
    }
  }
`;