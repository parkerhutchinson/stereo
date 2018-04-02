import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import {
  setActiveProject,
  closeActiveProject,
  setEscapeCode,
  getNextActiveProject,
  getPrevActiveProject
} from '../../actions/work-actions';
import Copy from './Copy';
import WorkCloseUI from '../02_molecules/WorkCloseUi';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavLinkArrow from '../01_atoms/NavLinkArrow';


class WorkProjectOverlay extends Component {
  closeProject() {
    this.props.closeActiveProject();
    this.props.setEscapeCode({code: 1});
  }
  nextProject(e, projectID) {
    this.props.getNextActiveProject(projectID);
    e.preventDefault();
  }
  prevProject(e, projectID) {
    this.props.getPrevActiveProject(projectID);
    e.preventDefault();
  }
  getButton(project) {
    const props = {
      title: project.title,
      url: project.link,
      classes: "button",
      target: "_blank",
    }
    return (
      <NavLinkArrow {...props}>
        <span className="button-arrow">
          <span className="button-arrow-head"></span>
        </span>
      </NavLinkArrow>
    )
  }
  getProject() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    return (
      <StyledWorkProjectOverlay
        show={true}
        color={project.color}
        className="grid-24 grid-col-24 project-overlay"
        key={project.title}
      >
        <WorkCloseUI
          clicked={() => this.closeProject()}
          show={true}
          color="rgb(var(--snow))"
          key="ui"
        />

        <a
          href="#next-project"
          onClick={(e) => this.nextProject(e, project.id)}
          className="project-nav project-nav-next"
          key="next-update"
        >Next</a>
        <a
          href="#prev-project"
          onClick={(e) => this.prevProject(e, project.id)}
          className="project-nav project-nav-prev"
          key="prev-update"
        >Prev</a>

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
            <div dangerouslySetInnerHTML={{__html: project.copy}} key={project.copy} />
            { project.link ? this.getButton(project) : null }
          </StyledOverlayCopy>
        </div>
      </StyledWorkProjectOverlay>
    )
  }
  render() {
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
  getNextActiveProject: PropTypes.func,
  getPrevActiveProject: PropTypes.func,
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
  getNextActiveProject: (id) => {
    dispatch(getNextActiveProject(id))
  },
  getPrevActiveProject: (id) => {
    dispatch(getPrevActiveProject(id))
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
    panel: 'var(--blueberry)',
  }
}
const getBackground = (color) => {
  if (color === 'dark') {
    return `linear-gradient(${getColors('light', 'background')}, ${getColors('dark', 'background')})`;
  } else {
    return `linear-gradient(${getColors('dark', 'background')}, ${getColors('light', 'background')})`;
  }
}
const getColors = (color, type) => {
  return colors[color] ? `rgb(${colors[color][type]})` : '';
}
// sucks that styled-components offers nothing for state transitions
injectGlobal`
  .project-overlay{z-index: 999;}
  .project-appear{
    opacity: .01;
    
    ul{
      opacity: .01;
    }
    .copy{
      opacity: .01;
      span.grid-col-1{
        &:before{
          width: 0%;
        }
      }
      .bg{
        clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 100% 100%);
      }
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
    ul{
      opacity: 1;
      transition: opacity .4s var(--fastanimation);
      transition-delay: .9s;
    }
    .copy{
      opacity: 1;
      transition: all .4s var(--fastanimation);
      transition-delay: .4s;
      span.grid-col-1{
        &:before{
          width: 70%;
        }
      }
      .bg{
        clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
        transition-delay: .4s;
      }
    }
    .grid-col-12 img{
      opacity: 1;
      top: 0px;
      transition: all .8s var(--fastanimation);
    }
    &:before{
      clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
      transition: all .8s var(--fastanimation);
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
    .project-nav{pointer-events: none;}
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
    .project-nav{pointer-events: none;}
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
  @media screen and (max-width: 768px) {
    mix-blend-mode: screen;
    opacity: .3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img{
    position: relative;
    display: inline-block;
    max-height: 100%;
    box-shadow: 10px 10px 40px ${ props => getColors(props.shadow, 'shadow') };
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
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(18, 1fr);
    grid-column-start: 1;
    grid-column-end: 19;
  }
  .project-nav{
    position: absolute;
    bottom: 60px;
    right: 50px;
    color: rgb(var(--snow));
    z-index: 2;
    display: inline-block;
    width: 30px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.1rem;
    transition: all .4s;
    &-prev{
      right: 110px;
    }
    &:hover{
      color: rgb(var(--radish));
    }
  }
  &.grid-24{
    align-items: center;
    align-content: stretch;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(18, 1fr);
      grid-column-start: 1;
      grid-column-end: 19;
    }
  };
  .project-details{
    color: ${props => getColors(props.color, 'text')};
    opacity: ${props => props.show ? '1' : '0'};
    transition: all .7s var(--fastanimation);
    transition-delay: ${props => props.show ? '.4s' : '0'};
    z-index: 1;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(18, 1fr);
      grid-column-start: 1;
      grid-column-end: 19; 
    }
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    background: ${ props => getBackground(props.color) };
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const StyledOverlayCopy = styled(Copy)`
  grid-column-start: 0;
  *{color:  ${ props => getColors(props.color, 'text') };}
  .bg{background: ${ props => getColors(props.color, 'panel') };}
  p{margin-bottom: 20px;}
  p:last-child{margin-bottom: 50px;}
`;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
