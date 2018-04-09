import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkFinderRow from '../02_molecules/WorkFinderRow';
import styled from 'styled-components';
import { setActiveProject, setEscapeCode } from '../../actions/work-actions';
import { modalOpen } from '../../actions/modal-actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { zdepth } from '../../lib/styled-helpers';

class WorkFinder extends Component {
  componentWillMount() {
    this.setState(
      {
        activeProject: 'Select a Project',
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
      this.setState({ activeProject: row.name });
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
      <StyledFinder className="workfinder grid-col-18" modal={modal}>
        <StyledFinderGrid className="grid-18">
          <header className="grid-col-16">
            <ReactCSSTransitionGroup
              component="h2"
              transitionName="project-finder-header"
              transitionEnterTimeout={400}
              transitionLeave={false}
            >
              <span key={this.state.activeProject}>
                { this.state.activeProject }
                <span className="arrow" key="arrow">
                  <span className="head"></span>
                </span>
              </span>
            </ReactCSSTransitionGroup>
          </header>
          <StyledFinderRows className="workfinder-rows grid-col-16" modal={modal}>
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
  z-index: ${zdepth('low')};
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
  z-index: ${zdepth('low')};
  align-items: start;
  grid-column-start: 4;
  opacity: ${props => props.modal.open ? '1' : '0'};
  transition: all .3s var(--fastanimation);
  transition-delay: ${props => props.modal.open ? '.4s' : '0'};
  @media screen and (max-width: 768px) {
    padding: 40px 0 0;
    height: 100vh;
    &.grid-col-18{
      grid-column-start: 1;
      grid-column-end: span 19;
    }
    .grid-col-16{
      grid-column-start: 2;
      grid-column-end: span 16;
    }
  }
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
    z-index: ${zdepth('lowest')};
  }
  &:after{
    display: block;
    content: '';
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, rgba(var(--snow),0), rgba(var(--snow),.7) 60%, rgba(var(--snow),1));
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${zdepth('mid')};
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
    z-index: ${zdepth('low')};
    padding-top: 20px;
    transform: ${props => props.modal.open ? 'translateY(0px)' : 'translateY(50px)'};
    opacity: ${props => props.modal.open ? '1' : '0'};
    transition: all .4s var(--fastanimation);
    transition-delay: ${props => props.modal.open ? '.9s' : '0'};
    @media screen and (max-width: 768px) {
      grid-column-start: 2;
      grid-column-end: span 16;
      margin-bottom: 20px;
    }
    h2{
      color: rgb(var(--blueberry));
      text-transform: capitalize;
      font-weight: normal;
      position: relative;
      height: 40px;
      width: 100%;
      & > span:first-child{
        z-index: ${zdepth('low')};
        background: white;
      }
      & > span{
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        &.project-finder-header{
          &-enter{
            opacity: .01;
            left: -30px;
          }
          &-enter-active{
            opacity: 1;
            left: 0;
            transition: all .4s var(--fastanimation);
          }
          &-leave{
            pointer-events: none;
            opacity: 0;
          }
          &-leave-active{
            opacity: 0;
          }
        }
      }
      span.arrow{
        display: inline-block;
        position: relative;
        width: 30px;
        margin-left: 20px;
        &:before{
          content: '';
          display: inline-block;
          height: 1px;
          background: rgb(var(--radish));
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: ${zdepth('low')};
          transition: all .4s;
        }
        .head{
          position: absolute;
          z-index: ${zdepth('mid')};
          top: 50%;
          right: -4px;
          height: 15px;
          width: 10px;
          transform: translateY(-50%);
          &:before, &:after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: rgb(var(--radish));
            right: 0;
            border-radius: 50%;
            transition: all .4s;
          }
          &:before{
            top: 0;
            transform-origin: left center;
            transform: rotate(45deg);
          }
          &:after{
            bottom: 0;
            transform-origin: left center;
            transform: rotate(-45deg);
          }
        }
      }
    }
    a{
      color: rgb(var(--radish));
    }
  }
`;

const StyledFinderGrid = styled.div`
  align-items: start;
  @media screen and (max-width: 768px) {
    &.grid-16{
      grid-template-columns: repeat(18, 1fr);
    }
  }
`;

const StyledFinderLabels = styled.dl`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #E4E3E3;
  .workfinder-label-name{width: 40%;}
  .workfinder-label-stack{width: 40%;}
  .workfinder-label-position{width: 20%;}
  @media screen and (max-width: 768px) {
    .workfinder-label-stack{display: none;}
    .workfinder-label-name{width: 70%;}
    .workfinder-label-position{width: 30%;}
  }
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
