import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import WorkBgElement from '../02_molecules/WorkBgElement';
import { connect } from 'react-redux';

class WorkLauncher extends Component {
  getWorkElements(props) {
    const { mobileWork } = props;

    return mobileWork.map((elem, i) =>
      <WorkBgElement image={elem.image} key={i}/>
    )
  }
  render() {
    return(
      <div className="grid-18">
        { this.getWorkElements(this.props) }
      </div>
    )
  }
}

WorkLauncher.propTypes = {
  mobileWork: PropTypes.array,
}

WorkLauncher.defaultProps = {
  mobileWork: [],
}

const mapStateToProps = (state) => {
  return {
    mobileWork: state.workImages,
  }
}


export default connect(
  mapStateToProps,
  null
)(WorkLauncher)
