import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';

class WorkFinder extends Component {
  doHover() {
    console.log(this);
  }
  getWork() {
    const staticRows = 20;
    const rows = [];
    for(let i = 0; i < staticRows; i++) {
      rows.push([
        <WorkFinderRow selected={(evt) => this.doHover(evt)} key={i}/>
      ])
    }
    return rows;
  }
  render() {
    return (
      <div className="workfinder">
        { this.getWork() }
      </div>
    )
  }
}

WorkFinder.propTypes = {
  work: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    work: state.work
  }
}

export default connect(
  mapStateToProps,
  null
)(WorkFinder);
