import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';
import styled from 'styled-components';

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
      <StyledFinder className="workfinder grid-col-16 grid-16">
        <header className="grid-col-12">
          <h2>{ this.state.activeProject }</h2>
          <a href="#nope">arrow</a>
        </header>

        { this.getWork() }
      </StyledFinder>
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

const StyledFinder = styled.div`
  background: white;
  grid-column-start: 5;
  padding: 40px 0;
  box-shadow: 10px 10px 30px var(--stormy);
  height: calc(100vh - 15%);
  overflow-y: scroll;
  overflow-x: hidden;
  header{
    grid-column-start: 2;
    display: flex;
    align-items: content;
    margin-bottom: 30px;
    h2{
      display: block;
      color: var(--stormy);
      text-transform: capitalize;
      font-weight: normal;
    }
    a{
      color: var(--radish);
    }
  }
`;

export default connect(
  mapStateToProps,
  null
)(WorkFinder);
