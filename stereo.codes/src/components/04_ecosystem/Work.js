import React from 'react';
import PropTypes from 'prop-types';
import { showModal } from '../../actions/modal-actions';
import { connect } from 'react-redux';
import WorkLauncher from '../03_organisms/WorkLauncher';

const Work = (props) => (
  <div className="work grid-col-24 grid-24">
    <WorkLauncher/>
    <a href="#open-modal" onClick={() => props.showModal(true)}>button</a>
  </div>
)

Work.propTypes = {
  showModal: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (show) => {
    dispatch(showModal(show))
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Work);
