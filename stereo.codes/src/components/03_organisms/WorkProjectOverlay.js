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
      <StyledWorkProjectOverlay show={project.show}>
        <WorkCloseUI clicked={() => this.closeProject()} show={project.show} color="var(--stormy)"/>
        <StyledProjectImage color={project.color} show={project.show} shadow={hsl}>
          <img src={project.image} alt=""/>
        </StyledProjectImage>
        <div className="project-details">
          <StyledOverlayCopy
            title={project.title}
            subTitle={subTitle}
            color={'var(--stormy)'}
            inview={true}
            grid={12}
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
  justify-content: space-around;
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

const StyledOverlayCopy = styled(Copy)`
  *{color: ${props => props.color}}
  .copy-wrap .copy-content{padding: 0 8.5% 5px;}
  span.grid-col-1:before{display: none;}
  .bg{display: none;}
  p{margin-bottom: 20px;}
  p:last-child{margin-bottom: 50px;}
`;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkProjectOverlay)
