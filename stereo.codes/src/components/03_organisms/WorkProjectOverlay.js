import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeActiveProject } from '../../actions/work-actions';
import Copy from './Copy';
import { hextorgb, rgbtohsl } from '../../scripts-lib/helper-colors';

class WorkProjectOverlay extends Component {
  closeProject(evt) {
    this.props.closeActiveProject();
    evt.preventDefault();
    return false;
  }
  render() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    const rgb = project.color ? hextorgb(project.color) : null;
    const hsl = project.color ? rgbtohsl(rgb[0], rgb[1], rgb[2]) : null;

    return(
      <StyledWorkProjectOverlay show={project.show}>
        <StyledProjectImage color={project.color} show={project.show} shadow={hsl}>
          <img src={project.image} alt=""/>
        </StyledProjectImage>
        <div className="project-details">
          <Copy
            title={project.title}
            subTitle={subTitle}
            color={'var(--stormy)'}
            inview={true}
            grid={12}
          >
            <a href="#open" onClick={(evt) => this.closeProject(evt)}>Close Project</a>
          </Copy>
        </div>
      </StyledWorkProjectOverlay>
    )
  }
}

WorkProjectOverlay.propTypes = {
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
})

const mapStateToProps = (state) => {
  return {
    project: state.work.project
  }
}

const shadow = (hsl) => {
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2] > 60 ? hsl[2] - 60 : hsl[2];
  return `hsla(${h}, ${s}%, ${l}%, .5)`;
}

const StyledProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${props => props.color};
  transition: all .7s var(--fastanimation);
  clip-path: ${props => props.show ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'};
  display: flex;
  align-items: center;
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
  opacity: 1;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all .4s var(--fastanimation);
  .project-details{
    color: var(--radish);
    position: absolute;
    background: var(--snow);
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    clip-path: ${props => props.show ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'};
    transition: all .7s var(--fastanimation);
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
