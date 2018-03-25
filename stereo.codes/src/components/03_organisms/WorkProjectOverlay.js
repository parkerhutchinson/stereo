import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { setActiveProject, closeActiveProject, setEscapeCode } from '../../actions/work-actions';
import Copy from './Copy';
import { hextorgb, rgbtohsl } from '../../scripts-lib/helper-colors';
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
  // componentWillUpdate(nextprops) {
  //   const { project } = this.props;
  //   console.log(project)
  //   if (!project.title) {
  //     ReactDOM.findDOMNode(this.refs.project).classList.add('project-intro');
  //   }
  // }
  // componentWillEnter (callback) {
  //   console.log('wtf')
  //   callback;
  // }
  // componentWillLeave (callback) {
  //   callback;
  // }
  // componentDidEnter() {
  //   console.log('enter?');
  //   ReactDOM.findDOMNode(this.refs.project).classList.add('project-overlay-enter');
    
  // }
  getProject() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    const rgb = project.color ? hextorgb(project.color) : null;
    const hsl = project.color ? rgbtohsl(rgb[0], rgb[1], rgb[2]) : null;
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
          color="rgb(var(--stormy))"
          key="ui"
        />
        <a href="#update-project" onClick={(e) => this.updateProject(e)} className="update-test" key="update">update</a>
        
        <StyledProjectImage
          show={true}
          shadow={hsl}
          className="grid-col-12"
          key="image-group"
        >
          <img src={project.image} alt="" key={project.image}/>
        </StyledProjectImage>

        <div className="project-details grid-col-12 grid-12" key="grid">
          <StyledOverlayCopy
            title={project.title}
            subTitle={subTitle}
            color={'rgb(var(--stormy))'}
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

const shadow = (hsl) => {
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2] > 50 ? hsl[2] - 50 : hsl[2];
  
  return `hsla(${h}, ${s}%, ${l}%, .3)`;
}

injectGlobal`
  .project-appear{
    opacity: .01;
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
    transition: all 1s;
    opacity: 0;
  }
  .project-enter{
    .copy{
      opacity: .01;
    }
    &:before{
      opacity: .01;
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
    }
    &:before{
      opacity: 1;
      transition-duration: .4s;
    }
    .grid-col-12 img{
      left: 0px;
      opacity: 1;
      transition: all .4s;
    }
  }
  .project-leave {
    .copy{
      opacity: 1;
    }
    &:before{
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
    &:before{
      opacity: .01;
      transition-duration: .4s;
      transition-delay: 0s;
    }
    .grid-col-12 img{
      opacity: .01;
      right: 100px;
      transition: all .4s;
    }
  }
`;

const StyledProjectImage = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  img{
    position: relative;
    display: inline-block;
    max-height: 80%;
    box-shadow: 10px 10px 30px ${props => props.shadow ? shadow(props.shadow) : null};
  }
`;

const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  z-index: 999;
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
    color: rgb(var(--radish));
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
    background: ${props => props.color};
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const StyledOverlayCopy = styled(Copy)`
  grid-column-start: 0;
  *{color: ${props => props.color}}
  span.grid-col-1:before{display: none;}
  .bg{background: rgb(var(--snow));}
  p{margin-bottom: 20px;}
  p:last-child{margin-bottom: 50px;}
`;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
