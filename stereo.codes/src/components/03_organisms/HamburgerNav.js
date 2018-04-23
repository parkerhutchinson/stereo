import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';
import NavigationMenu from '../02_molecules/NavigationMenu';
import Logo from '../01_atoms/Logo';

const HamburgerNav = (props) => {
  return(
    <StyledHamburgerNav show={props.show}>
      <Logo />
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
  width: 100%;
  height: 100vh;
  opacity: 1;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  &:before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${props => props.show ? '0%' : '30%'};
    left: 0;
    opacity: ${props => props.show ? '1' : '0'};
    background: rgb(var(--radish));
    clip-path: ${props => props.show ? 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' : 'polygon(0 100%, 100% 70%, 100% 100%, 0 100%)'};
    transition: clip-path .8s var(--fastanimation), top .8s var(--fastanimation), opacity .3s ease;
  }
  h1{
    position: relative;
    text-align: center;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: ${props => props.show ? '0px' : '40px'};
    opacity: ${props => props.show ? '1' : '0'};
    transition: all ${props => props.show ? '.5s' : '.2s'} var(--fastanimation);
    transition-delay: ${props => props.show ? '.6s' : '0s'};
    a{
      padding-left: 6px;
    }
  }
  ul{
    position: absolute;
    top: 90px;
    left: 0;
    height: calc(100vh - 90px);
    width: 100%;
    opacity: ${props => props.show ? '1' : '0'};
    transition: all ${props => props.show ? '.5s' : '.2s'} var(--fastanimation);
    transition-delay: ${props => props.show ? '.6s' : '0s'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li{
      text-align: center;
      a{
        padding: 60px;
        display: inline-block;
      }
    }
  }
`;