import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';
import NavigationMenu from '../02_molecules/NavigationMenu';

const HamburgerNav = (props) => {
  return(
    <StyledHamburgerNav show={props.show}>
      <NavigationMenu menu={props.menu} mobile={true} />
    </StyledHamburgerNav>
  )
}

HamburgerNav.propTypes = {
  menu: PropTypes.array,
  show: PropTypes.bool,
}

HamburgerNav.defaultProps = {
  menu: {},
  show: false,
}

export default HamburgerNav;


const StyledHamburgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${zdepth('highest')};
  background: ${props => props.show ? 'rgb(var(--radish))' : 'rgb(var(--blueberry))'};
  width: 100%;
  height: 100vh;
  opacity: ${props => props.show ? '1' : '0'};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: opacity .2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all .8s;
  grid-column-start: 1;
  grid-column-end: 18;
  grid-row-end: 1;
`;