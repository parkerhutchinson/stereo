import React from 'react';
import PropTypes from 'prop-types';
import { modalOpen } from '../../actions/modal-actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WorkLauncherBg from '../03_organisms/WorkLauncherBg';

const Work = (props) => {
  const active = props.section === 'work' ? 'active' : '';
  return (
    <StyledWork className="grid-col-18 work grid-18">

      <WorkLauncherBg />

      <StyledWorkLauncher className="work-launcher">
        <div className="work-launcher-main">
          <StyledButton onClick={() => props.modalOpen(true)} className={active}>
            <span>
              Browse Projects
            </span>
          </StyledButton>

          <StyledSupportCopy className={active}>
            Over <strong>10 years</strong> of professional web<br/>development experience.
          </StyledSupportCopy>
        </div>
      </StyledWorkLauncher>
    </StyledWork>
  )
}
Work.propTypes = {
  modalOpen: PropTypes.func,
  section: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    section: state.section,
  }
}

const mapDispatchToProps = (dispatch) => ({
  modalOpen: (open) => {
    dispatch(modalOpen(open))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Work);

const StyledWorkLauncher = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
  .work-launcher-main{
    max-width: 400px;
  }
`;

const StyledButton = styled.button`
  font-family: var(--playfair);
  color: var(--radish);
  font-size: 2.4rem;
  background: none;
  padding: 20px 80px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 30px;
  &:before{
    content: '';
    position: absolute;
    background: var(--snow);
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 10px 10px 30px 0 var(--stormy);
    z-index: 0;
    transition: width var(--fastanimation) .7s;
    transition-delay: 0s;
  }
  span{
    position: relative;
    z-index: 1;
    color: rgba(255, 74, 74, 0);
    transition: color cubic-bezier(.91,.02,.03,.98) .8s;
    transition-delay: 0s;
  }
  &.active{
    &:before{
      width: 100%;
      transition-delay: .5s;
    }
    span{
      color: rgba(255, 74, 74, 1);
      transition-delay: .5s;
    }
  }
`;

const StyledSupportCopy = styled.p`
  position: relative;
  top: -100px;
  font-size: 1.4rem;
  p{line-height: 1.8;}
  opacity: 0;
  transition: all cubic-bezier(.91,.02,.03,.98) .7s;
  transition-delay: 0s;
  &.active{
    transition-delay: .8s;
    top: 0px;
    opacity: 1;
  }
`;

const StyledWork = styled.div`
  min-height: 100vh;
  margin-bottom: 200px;
  grid-column-start: 4;
  position: relative;
`;
