import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';


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
  padding: 250px 0 40px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 100px 0 20px;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: rgb(var(--radish));
    z-index: ${zdepth('lowest')};
  }
  h5{
    position: relative;
    text-transform: uppercase;
    background: rgb(var(--blueberry));
    z-index: ${zdepth('low')};
    padding: 10px 0;
    display: inline-block;
    letter-spacing:1px;
  }
`;

export default Divider;
