import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import WorkBgElement from '../02_molecules/WorkBgElement';
import { connect } from 'react-redux';
import { zdepth } from '../../lib/styled-helpers';


class WorkProjectFinderBG extends Component {
  getWorkElements(props) {
    const { mobileWork } = props;
    const numCols = 3;
    const workbgGroup = [];
    const active = this.props.section ? 'active' : '';

    for (let i = 0; i < numCols; i++) {
      const imageIndexOne = i === 0 ? i : i + 1;
      const imageIndexTwo = i === 0 ? i + 1 : i + 2;
      workbgGroup.push(
        <StyledColumnGroup key={i} className={`${active}`}>
          <WorkBgElement image={mobileWork[imageIndexOne].image} />
          <WorkBgElement image={mobileWork[imageIndexTwo].image} />
        </StyledColumnGroup>
      )
    }

    return workbgGroup;
  }
  render() {
    return(
      <StyledWorkLauncher className={`bg-work grid-col-18`}>
        { this.getWorkElements(this.props) }
      </StyledWorkLauncher>
    )
  }
}

WorkProjectFinderBG.propTypes = {
  section: PropTypes.bool,
  mobileWork: PropTypes.array,
}

WorkProjectFinderBG.defaultProps = {
  section: false,
  mobileWork: [],
}

const mapStateToProps = (state) => {
  return {
    section: state.section.work,
    mobileWork: state.work.workImages,
  }
}

export default connect(
  mapStateToProps,
  null
)(WorkProjectFinderBG)

const StyledColumnGroup = styled.div`
  width: 30%;
  overflow: hidden;
  position: relative;
  z-index: ${zdepth('low')};
  top: 300px;
  opacity: 0;
  transition: all cubic-bezier(.53,.49,.64,.99);
  transition-delay: 0;
  transition-duration: .5s;
  
  &.active{
    top: 0;
    opacity: 1;
    transition-duration: 2.5s;
    &:first-child{
      transition-delay: .5s;
      transition-duration: 2s;
    }
    &:nth-child(even){
      top: 120px;
      transition-delay: 0s;
      transition-duration: 1.5s;
    }
    &:last-child{
      transition-delay: .5s;
      transition-duration: 2s;
    }
  }
  @media screen and (max-width: 768px) {
    width: 45%;
    &:last-child{display: none;}
    &.active{
      &:nth-child(even){
        top: 20px;
      }
    }
  }
`;

const StyledWorkLauncher = styled.div`
  grid-column-start: 4;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(18, 1fr);
    grid-column-start: 1;
    grid-column-end: 19;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: ${zdepth('mid')};
    background: linear-gradient(to bottom, rgba(var(--blueberry), .6), rgb(var(--blueberry)) 80%);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
