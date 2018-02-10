import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    const showClass = this.props.showModal ? 'active' : '';
    console.log(showClass);
    return (
      <StyledModal className={`${showClass} grid-24`}>
        { this.props.children }
      </StyledModal>
    )
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.element,
}

Modal.defaultProps = {
  showModal: false,
}

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  z-index: 99999;
  pointer-events: none;
  background: rgba(44, 46, 71, .8);
  padding-top: 5%;
  backdrop-filter: blur(0px);
  transition: .5s;
  &.active{
    opacity: 1;
    pointer-events: auto;
    backdrop-filter: blur(7px);
  }
`;

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.show,
  }
}

export default connect(
  mapStateToProps,
  null
)(Modal)
