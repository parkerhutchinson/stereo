import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { closeActiveProject } from '../../actions/work-actions';
import Copy from './Copy';

class WorkProjectOverlay extends Component {
  closeProject(evt) {
    this.props.closeActiveProject();
    evt.preventDefault();
    return false;
  }
  render() {
    const { project } = this.props;
    const subTitle = project.stack ? project.stack.join(', ') : null;
    return(
      <StyledWorkProjectOverlay show={project.show}>
        <div className="project-image"></div>
        <div className="project-details">
          <Copy title={project.title} color={'var(--radish)'} inview={true} subTitle={subTitle}>
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


const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  opacity: 1;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: all .4s var(--fastanimation);
  .project-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--radish);
    transition: all .7s var(--fastanimation);
    background-image: url(https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG);
    background-position: center;
    background-size: cover;
    clip-path: ${props => props.show ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'};
  }
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
    a{
      color: var(--radish);
    }
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)