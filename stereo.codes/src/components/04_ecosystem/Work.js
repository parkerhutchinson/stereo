import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { modalOpen } from '../../actions/modal-actions';
import { setEscapeCode, closeActiveProject } from '../../actions/work-actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WorkProjectFinderBG from '../03_organisms/WorkProjectFinderBG';

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
    const { section } = this.props;
    const inview = section.work ? section.work : null;
    return (
      <StyledWork className="grid-col-18 work grid-18">
        <WorkProjectFinderBG />
        <StyledWorkLauncher className="work-launcher">
          <div className="work-launcher-main">
            <StyledButton onClick={() => this.openFinder()} inview={inview}>
              <span>
                Browse Projects
              </span>
            </StyledButton>

            <StyledSupportCopy inview={inview}>
              Over <strong>10 years</strong> of professional web<br/>development experience.
            </StyledSupportCopy>
          </div>
        </StyledWorkLauncher>
      </StyledWork>
    )
  }
}

Work.propTypes = {
  modalOpen: PropTypes.func,
  section: PropTypes.object,
  windows: PropTypes.number,
  escwatcher: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    section: state.section,
    escwatcher: state.work.escapeWatcher,
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
  z-index: 3;
  .work-launcher-main{
    max-width: 400px;
  }
`;

const StyledButton = styled.button`
  font-family: var(--playfair);
  color: rgb(var(--radish));
  font-size: 2.4rem;
  background: none;
  padding: 20px 80px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 30px;
  &:before{
    content: '';
    position: absolute;
    background: rgb(var(--snow));
    width: ${props => props.inview ? '100%' : '0%'};
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 10px 10px 30px 0 rgb(var(--stormy));
    z-index: 0;
    transition: width var(--fastanimation) .7s;
    transition-delay: ${props => props.inview ? '.5s' : '0s'};
  }
  span{
    position: relative;
    z-index: 1;
    color: ${props => props.inview ? 'rgba(255, 74, 74, 1)' : 'rgba(255, 74, 74, 0)'};;
    transition: color cubic-bezier(.91,.02,.03,.98) .8s;
    transition-delay: ${props => props.inview ? '.5s' : '0s'};
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
`;
