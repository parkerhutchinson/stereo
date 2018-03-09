import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeActiveProject, setEscapeCode } from '../../actions/work-actions';
import Copy from './Copy';
import { hextorgb, rgbtohsl } from '../../scripts-lib/helper-colors';
import WorkCloseUI from '../02_molecules/WorkCloseUI';

class WorkProjectOverlay extends Component {
  closeProject() {
    this.props.closeActiveProject();
    this.props.setEscapeCode({code: 1});
  }
  render() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    const rgb = project.color ? hextorgb(project.color) : null;
    const hsl = project.color ? rgbtohsl(rgb[0], rgb[1], rgb[2]) : null;

    return(
      <StyledWorkProjectOverlay show={project.show} color={project.color} className="grid-24 grid-col-24">
        <WorkCloseUI clicked={() => this.closeProject()} show={project.show} color="rgb(var(--stormy))"/>
        <StyledProjectImage show={project.show} shadow={hsl} className="grid-col-12">
          <img src={project.image} alt=""/>
        </StyledProjectImage>
        <div className="project-details grid-col-12 grid-12">
          <StyledOverlayCopy
            title={project.title}
            subTitle={subTitle}
            color={'rgb(var(--stormy))'}
            inview={project.show}
            grid={9}
          >
            {/* // yeah yeah i dont want to hear it. */}
            <div dangerouslySetInnerHTML={{__html: project.copy}} />
          </StyledOverlayCopy>
        </div>
      </StyledWorkProjectOverlay>
    )
  }
}

WorkProjectOverlay.propTypes = {
  closeActiveProject: PropTypes.func,
  setEscapeCode: PropTypes.func,
  project: PropTypes.object,
  show: PropTypes.bool,
}

WorkProjectOverlay.defaultProps = {
  project: {},
  show: false,
}

const mapDispatchToProps = (dispatch) => ({
  closeActiveProject: (show) => {
    dispatch(closeActiveProject(show))
  },
  setEscapeCode: (code) => {
    dispatch(setEscapeCode(code))
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
  console.log(hsl[2]);
  return `hsla(${h}, ${s}%, ${l}%, .3)`;
}

const StyledProjectImage = styled.div`
  position: relative;
  left: 0;
  top: ${props => props.show ? '0' : '100px'};
  height: 100%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  opacity: ${props => props.show ? '1' : '0'};
  transition: all;
  transition-delay: ${props => props.show ? '.6s' : '0'};
  transition-duration: ${props => props.show ? '1.4s' : '.4s'};
  img{
    display: inline-block;
    max-height: 80%;
    box-shadow: 10px 10px 30px ${props => props.shadow ? shadow(props.shadow) : null};
  }
`;

const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  align-items: center;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all .4s var(--fastanimation);
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
    clip-path: ${props => props.show ? 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 70%, 100% 100%, 0 100%)'};
    transition: all .8s var(--fastanimation);
    transition-delay: ${props => props.show ? '.2s' : '0'};
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
