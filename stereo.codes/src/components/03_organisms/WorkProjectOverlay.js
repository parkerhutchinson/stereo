import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

class WorkProjectOverlay extends Component {
  render() {
    const { id } = this.props;
    return(
      <StyledWorkProjectOverlay>
        <div className="project-image"></div>
        <h1>Hello World {id}</h1>
      </StyledWorkProjectOverlay>
    )
  }
}

WorkProjectOverlay.propTypes = {
  id: PropTypes.number,
}

WorkProjectOverlay.defaultProps = {
  id: 0,
}

const mapStateToProps = (state) => {
  return {
    id: state.work.project.id,
  }
}

const StyledWorkProjectOverlay = styled.article`
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  .project-image{
    width: 50%;
    background: var(--radish);
  }
  h1{
    color: var(--snow);
  }
`;

export default connect(
  mapStateToProps,
  null
)(WorkProjectOverlay)
