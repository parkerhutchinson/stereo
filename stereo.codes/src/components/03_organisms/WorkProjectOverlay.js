import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { setActiveProject, closeActiveProject, setEscapeCode } from '../../actions/work-actions';
import Copy from './Copy';
import WorkCloseUI from '../02_molecules/WorkCloseUI';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ReactDOM from 'react-dom';

class WorkProjectOverlay extends Component {
  closeProject() {
    this.props.closeActiveProject();
    this.props.setEscapeCode({code: 1});
  }
  updateProject(e) {
    const newProject = this.props.project.id += 1;
    this.props.setActiveProject(newProject);
    e.preventDefault()
  }
  getProject() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    return (
      <StyledWorkProjectOverlay
        show={true}
        color={project.color}
        className="grid-24 grid-col-24 project-overlay"
        key={project.color}
      >
        <WorkCloseUI
          clicked={() => this.closeProject()}
          show={true}
          color="rgb(var(--radish))"
          key="ui"
        />
        <a href="#update-project" onClick={(e) => this.updateProject(e)} className="update-test" key="update">update</a>
        
        <StyledProjectImage
          show={true}
          shadow={project.color}
          className="grid-col-12"
          key="image-group"
        >
          <img src={project.image} alt="" key={project.image}/>
        </StyledProjectImage>

        <div className="project-details grid-col-12 grid-12" key="grid">
          <StyledOverlayCopy
            title={project.title}
            subTitle={subTitle}
            color={project.color}
            inview={true}
            grid={9}
            key={project.title}
          >
            {/* // yeah yeah i dont want to hear it. */}
            <div dangerouslySetInnerHTML={{__html: project.copy}} key={project.copy}/>
          </StyledOverlayCopy>
        </div>
      </StyledWorkProjectOverlay>
    )
  }
  render() {
    const { project } = this.props;
    return(
      <ReactCSSTransitionGroup
        component="div"
        ref="project"
        className="project-overlay"
        transitionName="project"
        transitionAppear
        transitionAppearTimeout={1400}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}
      >
        
        { this.getProject() }
        
      </ReactCSSTransitionGroup>
    )
  }
}

WorkProjectOverlay.propTypes = {
  closeActiveProject: PropTypes.func,
  setEscapeCode: PropTypes.func,
  setActiveProject: PropTypes.func,
  project: PropTypes.object,
  show: PropTypes.bool,
}

WorkProjectOverlay.defaultProps = {
  project: {
    show: false,
  },
}

const mapDispatchToProps = (dispatch) => ({
  closeActiveProject: (show) => {
    dispatch(closeActiveProject(show))
  },
  setEscapeCode: (code) => {
    dispatch(setEscapeCode(code))
  },
  setActiveProject: (id) => {
    dispatch(setActiveProject(id))
  },
})

const mapStateToProps = (state) => {
  return {
    project: state.work.project
  }
}

const colors = {
  light: {
    background: 'var(--stormy)',
    shadow: '8, 1, 33',
    text: 'var(--snow)',
    panel: 'var(--blueberry)',
  },
  dark: {
    background: 'var(--blueberry)',
    shadow: '8, 1, 33',
    text: 'var(--snow)',
    panel: 'var(--stormy)',
  }
}
const getColors = (color, type) => {
  return colors[color] ? `rgb(${colors[color][type]})` : '';
}

injectGlobal`
  .project-overlay{z-index: 999;}
  .project-appear{
    opacity: .01;
    .copy{
      opacity: .01;
    }
    .grid-col-12 img{
      opacity: .01;
      top: 100px;
    }
    &:before{
      clip-path: polygon(0 100%, 100% 70%, 100% 100%, 0 100%);
    }
  }
  .project-appear.project-appear-active{
    opacity: 1;
    transition: all .8s var(--fastanimation);
    .copy{
      opacity: 1;
      transition: all .4s var(--fastanimation);
      transition-delay: .4s;
    }
    .grid-col-12 img{
      opacity: 1;
      top: 0px;
      transition: all .8s var(--fastanimation);
    }
    &:before{
      clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
      transition: all .8s var(--fastanimation);
      transition-delay: .2s;
    }
  }
  .project-overlay-wrap{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .project-overlay article{
    opacity: 1;
  }
  .project-overlay-wrap-leave.project-overlay-wrap-leave-active article{
    transition-delay: 0s;
    transition: all .4s;
    opacity: 0;
  }
  .project-enter{
    z-index: 9999;
    .copy{
      opacity: .01;
    }
    &:before{
      clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 100% 100%);
    }
    .grid-col-12 img{
      opacity: 0.01;
      left: 100px;
    }
  }
  .project-enter.project-enter-active{
    .copy{
      opacity: 1;
      transition: all .4s;
      transition-delay: .4s;
    }
    &:before{
      clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
      transition: all 1s var(--fastanimation);
    }
    .grid-col-12 img{
      left: 0px;
      opacity: 1;
      transition: all 1s var(--fastanimation);
    }
  }
  .project-leave {
    z-index: 999;
    .copy{
      opacity: 1;
    }
    .grid-col-12 img{
      opacity: 1;
      right: 0px;
    }
  }
  .project-leave.project-leave-active {
    .copy{
      opacity: .01;
      transition-duration: .4s;
    }
    .grid-col-12 img{
      opacity: .01;
      right: 100px;
      transition: all 1s var(--fastanimation);
    }
  }
`;

const StyledProjectImage = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  img{
    position: relative;
    display: inline-block;
    max-height: 80%;
    box-shadow: 10px 10px 30px ${ props => getColors(props.shadow, 'shadow') };
  }
`;

const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  align-items: center;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  .update-test{
    position: absolute;
    top: 30px;
    right: 150px;
    color: red;
  }
  &.grid-24{
    align-items: center;
    align-content: stretch
  };
  .project-details{
    color: ${ props => getColors(props.color, 'text') };
    opacity: ${props => props.show ? '1' : '0'};
    transition: all .7s var(--fastanimation);
    transition-delay: ${props => props.show ? '.4s' : '0'};
    z-index: 1;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    background: ${ props => getColors(props.color, 'background') };
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const StyledOverlayCopy = styled(Copy)`
  grid-column-start: 0;
  *{color:  ${ props => getColors(props.color, 'text') };}
  span.grid-col-1:before{display: none;}
  .bg{background: ${ props => getColors(props.color, 'panel') };}
  p{margin-bottom: 20px;}
  p:last-child{margin-bottom: 50px;}
`;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
