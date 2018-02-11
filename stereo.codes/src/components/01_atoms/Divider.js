import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';


const Divider = (props) => (
  <StyledDivider className="divider">
    <h5>{props.label}</h5>
  </StyledDivider>
)

Divider.propTypes = {
  label: PropTypes.string.isRequired,
}

Divider.defaultProps = {
  label: 'label',
}

const StyledDivider = styled.div`
  margin: 0 auto;
  display: block;
  width: 100%;
  grid-column: 1 / span 24;
  position: relative;
  padding: 140px 0 40px;
  text-align: center;
  &:before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: var(--radish);
    z-index: 0;
  }
  h5{
    position: relative;
    text-transform: uppercase;
    background: var(--blueberry);
    z-index: 1;
    padding: 10px 0;
    display: inline-block;
  }
`;

export default Divider;
