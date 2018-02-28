import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';
import styled from 'styled-components';
import { setActiveProject } from '../../actions/work-actions';

class WorkFinder extends Component {
  componentWillMount() {
    this.setState({ activeProject: 'test' });
  }
  setHover(row) {
    if (!row.na) {
      this.setState({ activeProject: row.name });
    }
  }
  setActive(row) {
    if (!row.na) {
      this.props.setActiveProject(row.id);
    }
  }
  getWork(rows) {
    return rows.map((row, i) =>
      <WorkFinderRow
        id={row.id}
        setHover={(row) => this.setHover(row)}
        setActive={(row) => this.setActive(row)}
        key={i}
        name={row.title}
        na={row.na ? true : false}
      />
    );
  }
  render() {
    const { projects } = this.props;
    return (
      <StyledFinder className="workfinder grid-col-16">
        <StyledFinderGrid className="grid-16">
          <header className="grid-col-12">
            <h2>{ this.state.activeProject }</h2>
            <a href="#nope">arrow</a>
          </header>
          <StyledFinderRows className="workfinder-rows grid-col-14">
            <StyledFinderLabels>
              <dd className="workfinder-label-name">
                <dl>
                  <dt>Name</dt>
                </dl>
              </dd>
              <dd className="workfinder-label-stack">
                <dl>
                  <dt>Stack</dt>
                </dl>
              </dd>
              <dd className="workfinder-label-position">
                <dl>
                  <dt>Position</dt>
                </dl>
              </dd>
            </StyledFinderLabels>
            { this.getWork(projects) }
          </StyledFinderRows>
        </StyledFinderGrid>
      </StyledFinder>
    )
  }
}

WorkFinder.propTypes = {
  projects: PropTypes.array,
}

const mapDispatchToProps = (dispatch) => ({
  setActiveProject: (id) => {
    dispatch(setActiveProject(id))
  },
});

const mapStateToProps = (state) => {
  return {
    projects: state.work.projects
  }
}

const StyledFinderRows = styled.div`
  grid-column-start: 2;
  position: relative;
  z-index: 1;
`;

const StyledFinder = styled.div`
  position: relative;
  background: white;
  padding: 40px 0;
  box-shadow: 10px 10px 30px var(--stormy);
  height: calc(100vh - 20%);
  overflow: hidden;
  z-index: 2;
  align-items: start;
  grid-column-start: 5;
  &:after{
    display: block;
    content: '';
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.7) 60%, rgba(255,255,255,1));
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
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

const StyledFinderGrid = styled.div`
  align-items: start;
`;

const StyledFinderLabels = styled.dl`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #E4E3E3;
  .workfinder-label-name{width: 40%;}
  .workfinder-label-stack{width: 40%;}
  .workfinder-label-position{width: 20%;}
  dt{
    font-weight: normal;
    text-transform: uppercase;
    color: rgba(40,38,51, .5);
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkFinder);
