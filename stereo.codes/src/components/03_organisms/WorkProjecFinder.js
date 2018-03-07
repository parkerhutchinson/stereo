import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';
import styled from 'styled-components';
import { setActiveProject, setEscapeCode } from '../../actions/work-actions';
import { modalOpen } from '../../actions/modal-actions';


class WorkFinder extends Component {
  componentWillMount() {
    this.setState(
      {
        activeProject: 'test',
      }
    );
  }
  setHover(row) {
    if (!row.na) {
      this.setState({ activeProject: row.name });
    }
  }
  setActive(row) {
    if (!row.na) {
      this.props.setActiveProject(row.id);
      this.props.setEscapeCode({code: 2});
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
    const { projects, modal } = this.props;
    return (
      <StyledFinder className="workfinder grid-col-16" modal={modal}>
        <StyledFinderGrid className="grid-16">
          <header className="grid-col-12">
            <h2>{ this.state.activeProject }</h2>
            <a href="#nope">arrow</a>
          </header>
          <StyledFinderRows className="workfinder-rows grid-col-14" modal={modal}>
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
  modal: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => ({
  setActiveProject: (id) => {
    dispatch(setActiveProject(id))
  },
  modalOpen: (open) => {
    dispatch(modalOpen(open))
  },
  setEscapeCode: (code) => {
    dispatch(setEscapeCode(code))
  },
});

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    projects: state.work.projects
  }
}

const StyledFinderRows = styled.div`
  grid-column-start: 2;
  position: relative;
  z-index: 1;
  transform: ${props => props.modal.open ? 'translateY(0px)' : 'translateY(50px)'};
  opacity: ${props => props.modal.open ? '1' : '0'};
  transition: all .4s var(--fastanimation);
  transition-delay: ${props => props.modal.open ? '1.1s' : '0'};;
`;

const StyledFinder = styled.div`
  position: relative;
  background: none;
  padding: 40px 0;
  height: calc(100vh - 20%);
  overflow: hidden;
  z-index: 2;
  align-items: start;
  grid-column-start: 5;
  opacity: ${props => props.modal.open ? '1' : '0'};
  transition: all .3s var(--fastanimation);
  transition-delay: ${props => props.modal.open ? '.4s' : '0'};
  &:before{
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgb(var(--snow));
    box-shadow: 10px 10px 30px rgb(var(--stormy));
    clip-path: ${props => props.modal.open ? 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 70%, 100% 100%, 0 100%)'};
    transition: all .8s var(--fastanimation);
    transition-delay: ${props => props.modal.open ? '.4s' : '0'};
    z-index: 0;
  }
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
    opacity: ${props => props.modal.open ? '1' : '0'};
    transition: opacity .8s var(--fastanimation);
    transition-delay: .3s;
  }
  header{
    grid-column-start: 2;
    display: flex;
    align-items: content;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    transform: ${props => props.modal.open ? 'translateY(0px)' : 'translateY(50px)'};
    opacity: ${props => props.modal.open ? '1' : '0'};
    transition: all .4s var(--fastanimation);
    transition-delay: ${props => props.modal.open ? '.9s' : '0'};
    h2{
      display: block;
      color: rgb(var(--stormy));
      text-transform: capitalize;
      font-weight: normal;
    }
    a{
      color: rgb(var(--radish));
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
