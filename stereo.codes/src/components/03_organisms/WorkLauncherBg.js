import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import WorkBgElement from '../02_molecules/WorkBgElement';
import { connect } from 'react-redux';

class WorkLauncherBg extends Component {
  getWorkElements(props) {
    const { mobileWork } = props;
    const numCols = 3;
    const workbgGroup = []

    for (let i = 0; i < numCols; i++) {
      const imageIndexOne = i === 0 ? i : i + 1;
      const imageIndexTwo = i === 0 ? i + 1 : i + 2;
      workbgGroup.push(
        <StyledColumnGroup key={i}>
          <WorkBgElement image={mobileWork[imageIndexOne].image} />
          <WorkBgElement image={mobileWork[imageIndexTwo].image} />
        </StyledColumnGroup>
      )
    }

    return workbgGroup;
  }
  render() {
    return(
      <StyledWorkLauncher className="bg-work grid-col-18">
        { this.getWorkElements(this.props) }
      </StyledWorkLauncher>
    )
  }
}

WorkLauncherBg.propTypes = {
  mobileWork: PropTypes.array,
}

WorkLauncherBg.defaultProps = {
  mobileWork: [],
}

const mapStateToProps = (state) => {
  return {
    section: state.Section,
    mobileWork: state.workImages,
  }
}


export default connect(
  mapStateToProps,
  null
)(WorkLauncherBg)

const StyledColumnGroup = styled.div`
  width: 30%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &:nth-child(even){
    top: 120px;
  }
`;

const StyledWorkLauncher = styled.div`
  grid-column-start: 4;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(51, 63, 106, .6), var(--blueberry) 80%);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
