import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';

class WorkFinder extends Component {
  componentWillMount() {
    this.setState({ activeProject: 'test' });
  }
  doHover(row) {
    this.setState({ activeProject: row.name });
  }
  getWork() {
    const staticRows = 20;
    const rows = [];
    for(let i = 0; i < staticRows; i++) {
      rows.push([
        <WorkFinderRow selected={(props) => this.doHover(props)} key={i} name={`draftboard-${i}`}/>
      ])
    }
    return rows;
  }
  render() {
    return (
      <div className="workfinder grid-col-16 grid-16">
        <header className="grid-col-12">
          <h2>{ this.state.activeProject }</h2>
          <a href="#nope">arrow</a>
        </header>

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
