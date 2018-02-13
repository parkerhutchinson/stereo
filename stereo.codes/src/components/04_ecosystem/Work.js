import React from 'react';
import PropTypes from 'prop-types';
import { modalOpen } from '../../actions/modal-actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WorkLauncherBg from '../03_organisms/WorkLauncherBg';

const Work = (props) => (
  <StyledWork className="work grid-col-24 grid-24">
    <WorkLauncherBg />
    <StyledWorkLauncher className="work-launcher">
      <div className="work-launcher-main">
        <StyledButton onClick={() => props.modalOpen(true)}>Browse Projects</StyledButton>
        <p>Over <strong>10 years</strong> of professional web<br/>development experience.</p>
      </div>
    </StyledWorkLauncher>
  </StyledWork>
)

Work.propTypes = {
  modalOpen: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  modalOpen: (open) => {
    dispatch(modalOpen(open))
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Work);

const StyledWorkLauncher = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
  .work-launcher-main{
    max-width: 400px;
    font-size: 1.4rem;
    p{line-height: 1.8;}
  }
`;

const StyledButton = styled.button`
  font-family: var(--playfair);
  color: var(--radish);
  font-size: 2.4rem;
  background: var(--snow);
  padding: 20px 80px;
  box-shadow: 10px 10px 30px 0 var(--stormy);
  cursor: pointer;
  display: inline-block;
  margin-bottom: 30px;
`;

const StyledWork = styled.div`
  min-height: 100vh;
  .grid-18{
    grid-column-start: 4;
  }
`;
