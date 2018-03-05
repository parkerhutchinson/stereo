import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { modalOpen } from '../../actions/modal-actions';
import { connect } from 'react-redux';
import { setEscapeCode } from '../../actions/work-actions';
import WorkCloseUI from '../02_molecules/WorkCloseUI';


class Modal extends Component {
  closeModal() {
    this.props.modalOpen(false);
    this.props.setEscapeCode({code: 1})
  }
  render() {
    const { modal, children } = this.props;
    return (
      <StyledModal className="grid-24" modal={modal.open}>
        <WorkCloseUI clicked={(evt) => this.closeModal(evt)} color="var(--snow)" show={modal.open}/>
        <div className="modal-bg" onClick={() => this.closeModal()}></div>
        { children }
      </StyledModal>
    )
  }
}

Modal.propTypes = {
  modal: PropTypes.object,
  modalOpen: PropTypes.func,
  children: PropTypes.element,
}

Modal.defaultProps = {
  modal: { open: false },
}

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${props => props.modal ? '1' : '0'};
  z-index: 99999;
  padding-top: 5%;
  pointer-events: ${props => props.modal ? 'auto' : 'none'};
  transition: all .5s var(--fastanimation);
  .modal-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(51, 63, 106, .8);
    backdrop-filter: ${props => props.modal ? 'blur(0px)' : 'blur(7px)'};: blur(0px);
  }
`;

const mapDispatchToProps = (dispatch) => ({
  modalOpen: (show) => {
    dispatch(modalOpen(show))
  },
  setEscapeCode: (code) => {
    dispatch(setEscapeCode(code))
  },
});

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
