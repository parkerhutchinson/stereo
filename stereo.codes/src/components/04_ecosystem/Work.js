import React, { Component } from 'react';
import WorkFinder from '../03_organisms/WorkFInder';
import { connect } from 'react-redux';

const Work = (props) => (
  <div className="work grid-col-24 grid-24">
    <WorkFinder />
  </div>
)

const mapStateToProps = (state) => {
  return {
    workModal: state.workModal
  }
}
export default connect(
  mapStateToProps,
  null
)(Work);
