import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { modalOpen } from '../../actions/modal-actions';
import { setEscapeCode, closeActiveProject } from '../../actions/work-actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WorkProjectFinderBG from '../03_organisms/WorkProjectFinderBG';
import Modal from '../03_organisms/Modal';
import WorkProjectFinder from '../03_organisms/WorkProjectFinder';
import WorkProjectOverlay from '../03_organisms/WorkProjectOverlay';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { zdepth } from '../../lib/styled-helpers';


class Work extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress.bind(this));
  }
  // escape key handler
  handleKeypress(e){
    switch (e.keyCode) {
      case 27:
        this.closeWindow();
        break;
      default:
        return;
    }
  }
  // hackiest thing ever. pretty sure state machine would be more dynamic.
  closeWindow() {
    const { escwatcher } = this.props;
    switch(escwatcher.code) {
      case 1:
        this.props.modalOpen(false);
        break;
      case 2:
        this.props.closeActiveProject();
        this.props.setEscapeCode({code: 1});
        break;
      default:
        return;
    }
  }
  openFinder() {
    this.props.setEscapeCode({code: 1});
    this.props.modalOpen(true);
  }
  render() {
    const { section, project } = this.props;
    const inview = section.work ? section.work : null;
    return (
      <Fragment>
        <StyledWork className="grid-col-18 work grid-18">
          <WorkProjectFinderBG />
          <StyledWorkLauncher className="work-launcher">
            <div className="work-launcher-main">
              <StyledButton onClick={() => this.openFinder()} inview={inview}>
                <span>
                  View Projects
                </span>
              </StyledButton>

              <StyledSupportCopy inview={inview}>
                Over <strong>10 years</strong> of professional web<br/>development experience.
              </StyledSupportCopy>
            </div>
          </StyledWorkLauncher>
        </StyledWork>
        <Modal>
          <Fragment>
            <WorkProjectFinder />
            <ReactCSSTransitionGroup
              transitionName="project-overlay-wrap"
              transitionEnter={false}
              transitionEnterTimeout={0}
              transitionLeaveTimeout={400}
            >
              { project.show ? <WorkProjectOverlay /> : null }
            </ReactCSSTransitionGroup>
          </Fragment>
        </Modal>
      </Fragment>
    )
  }
}

Work.propTypes = {
  modalOpen: PropTypes.func,
  section: PropTypes.object,
  windows: PropTypes.number,
  escwatcher: PropTypes.object,
  project: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    section: state.section,
    escwatcher: state.work.escapeWatcher,
    project: state.work.project
  }
}

const mapDispatchToProps = (dispatch) => ({
  modalOpen: (open) => {
    dispatch(modalOpen(open))
  },
  setEscapeCode: (code) => {
    dispatch(setEscapeCode(code))
  },
  closeActiveProject: (show) => {
    dispatch(closeActiveProject(show))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Work);

const StyledWorkLauncher = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: ${zdepth('mid')};
  .work-launcher-main{
    max-width: 400px;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const StyledButton = styled.button`
  font-family: var(--roboto);
  text-transform: uppercase;
  color: rgb(var(--radish));
  font-size: 1.6rem;
  background: none;
  padding: 29px 80px 23px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 30px;
  line-height: 1;
  overflow: hidden;
  &:before{
    content: '';
    position: absolute;
    background: rgb(var(--snow));
    width: ${props => props.inview ? '100%' : '0%'};
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 10px 10px 30px 0 rgb('8, 1, 33');
    z-index: ${zdepth('lowest')};
    transition: width var(--fastanimation) .7s;
    transition-delay: ${props => props.inview ? '.5s' : '0s'};
  }
  &:after{
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    width: 0%;
    z-index: ${zdepth('lowest')};
    background: rgb(var(--radish));
    opacity: 0;
    transition: all var(--fastanimation) .7s;
  }
  span{
    position: relative;
    z-index: ${zdepth('low')};
    color: ${props => props.inview ? 'rgba(var(--radish), 1)' : 'rgba(255, 74, 74, 0)'};;
    transition: color cubic-bezier(.91,.02,.03,.98) .8s;
    transition-delay: ${props => props.inview ? '.5s' : '0s'};
  }
  @media screen and (min-width: 768px) {
    &:hover{
      &:after{
        width: 100%;
        opacity: 1;
      }
      span{
        color: rgb(var(--snow));
        transition: all var(--fastanimation) .5s;
      }
    }
  }
`;

const StyledSupportCopy = styled.p`
  position: relative;
  top: ${props => props.inview ? '0px' : '-100px'};
  font-size: 1.4rem;
  p{line-height: 1.8;}
  opacity: ${props => props.inview ? '1' : '0'};
  transition: all cubic-bezier(.91,.02,.03,.98) .7s;
  transition-delay: ${props => props.inview ? '.8s' : '0s'};;
`;

const StyledWork = styled.div`
  min-height: 100vh;
  margin-bottom: 200px;
  grid-column-start: 4;
  position: relative;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(18, 1fr);
    grid-column-start: 1;
    grid-column-end: 19;
    min-height: 50vh;
  }
`;
