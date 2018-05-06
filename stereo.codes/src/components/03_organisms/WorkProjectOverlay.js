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
import { zdepth } from '../../lib/styled-helpers';


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
    const color = project.light ? 'light' : 'dark';
    return (
      <StyledWorkProjectOverlay
        show={true}
        color={color}
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
          shadow={color}
          className="grid-col-12"
          key="image-group"
        >
          <img src={project.image} alt="" key={project.image}/>
        </StyledProjectImage>

        <div className="project-details grid-col-12 grid-12" key="grid">
          <StyledOverlayCopy
            title={project.title}
            subTitle={subTitle}
            color={color}
            inview={true}
            grid={9}
            key={project.title}
            copyImage={project.image}
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
  .project-overlay{
    z-index: ${zdepth('high')};
  }
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
        transform: translate3d(0,0,0);
        clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 100% 100%);
      }
    }
    .grid-col-12 img{
      opacity: .01;
      top: 100px;
    }
    &:before{
      transform: translate3d(0,0,0);
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
        transform: translate3d(0,0,0);
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
      transform: translate3d(0,0,0);
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
    &-enter, &-enter-active{
      a{
        pointer-events: none;
      }
    }
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
    z-index: ${zdepth('highest')};
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
    z-index: ${zdepth('high')};
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
  z-index: ${zdepth('low')};
  @media screen and (max-width: 768px) {
    display: none;
  }
  img{
    position: relative;
    display: inline-block;
    max-height: 80%;
    box-shadow: 10px 10px 40px ${ props => getColors(props.shadow, 'shadow') };
    @media screen and (max-width: 768px) {
      max-height: 1000%;
      height: auto;
      width: 120%;
    }
  }
`;

const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(18, 1fr);
    grid-column-start: 1;
    grid-column-end: 19;
    ul{
      li:first-child{
        text-align: right;
        margin-right: 0;
        a{
          color: rgb(var(--snow));
        }
      }
    }
  }
  .project-nav{
    position: absolute;
    bottom: 60px;
    right: 50px;
    color: rgb(var(--snow));
    z-index: ${zdepth('high')};
    display: inline-block;
    width: 50px;
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
    @media screen and (max-width: 768px) {
      top: 0px;
      bottom: auto;
      left: 80px;
      padding: 20px;
      &-prev{
        left: 0px;
      }
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
    z-index: ${zdepth('low')};
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
    z-index: ${zdepth('lowest')};
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
  .bg{background-color: ${ props => getColors(props.color, 'panel') };}
  p{margin-bottom: 20px;}
  p:last-child{margin-bottom: 50px;}
  @media screen and (max-width: 768px) {
    &.grid-col-9{
      grid-column-end: span 18;
    }
  }
`;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
