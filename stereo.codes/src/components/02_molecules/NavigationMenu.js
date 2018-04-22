import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLink from '../01_atoms/NavLink';

const createMainNav = (menu) => {
  return menu.map((item, i) => (
    <li key={i}>
      <span className="borderElem"></span>
      <NavLink url={item.url} title={item.title} />
    </li>
  ));
}

const NavigationMenu = (props) => {
  const { menu, mobile } = props;
  return(
    <StyledMenu mobile={mobile} className={props.className}>
      { createMainNav(menu) }
    </StyledMenu>
  );
}

NavigationMenu.propTypes = {
  menu: PropTypes.array,
  mobile: PropTypes.bool,
}

NavigationMenu.defaultProps = {
  menu: [],
  mobile: false,
}

export default NavigationMenu;

const StyledMenu = styled.ul`
  grid-column: 11 / -1;
  li{
    display: ${props => props.mobile ? 'block' : 'inline-block'};
    margin-right: ${props => props.mobile ? '0px' : '60px'};
    text-transform: uppercase;
    position: relative;
    &:last-child{
      margin-right: 0;
    }
  }
`;