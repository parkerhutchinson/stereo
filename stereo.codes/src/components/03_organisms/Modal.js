import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { showModal } from '../../actions/modal-actions';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    const showClass = this.props.modalState ? 'active' : '';
    console.log(showClass);
    return (
      <StyledModal className={`${showClass} grid-24`}>
        <div className="modal-bg" onClick={() => this.props.closeModal(false)}></div>
        { this.props.children }
      </StyledModal>
    )
  }
}

Modal.propTypes = {
  modalState: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element,
}

Modal.defaultProps = {
  modalState: false,
}

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  z-index: 99999;
  padding-top: 5%;
  pointer-events: none;
  transition: .5s;
  &.active{
    opacity: 1;
    pointer-events: auto;
    backdrop-filter: blur(7px);
  }
  .modal-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(44, 46, 71, .8);
    backdrop-filter: blur(0px);
  }
`;

const mapDispatchToProps = (dispatch) => ({
  closeModal: (show) => {
    dispatch(showModal(show))
  },
});

const mapStateToProps = (state) => {
  return {
    modalState: state.modal.show,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
