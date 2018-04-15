import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavLink from '../01_atoms/NavLink';
import { connect } from 'react-redux';
import { navigationOpen } from '../../actions/navigation-actions';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';
const Velocity = require('velocity-animate');

class Navigation extends Component {
  constructor() {
    super();
    this.navConfig = {
      about: '.about',
      work: '.work',
      connect: '.connect',
    }
    this.openHamburger.bind(this);
  }

  createMainNav() {
    let elems = [];
    Object.entries(this.navConfig).forEach(([key, value]) => {
      elems.push(
        <li key={key}>
          <span className="borderElem"></span>
          <NavLink url={value} title={key} />
        </li>
      );
    });
    return (
      <ul className="grid-col-6" ref="menuItems">
        {elems}
      </ul>
    );
  }

  openHamburger(evt) {
    if (!this.props.navigation.open) {
      this.props.navigationOpen(true);
      this.transitionOpen(true);
    } else {
      this.props.navigationOpen(false);
      this.transitionOpen(false);
    }

    evt.preventDefault();
    return false;
  }

  circleSetup() {
    const posLeft = (window.innerWidth / 2) + 20;
    const posTop = (window.innerHeight / 2) * -1 + 20;
    return {
      transform: `translateX(${posLeft}px) translateY(${posTop}px)`,
    }

  }

  transitionOpen(isOpen) {
    const items = this.refs.menuItems.children;
    const winBox = window.innerHeight * 2.3 + 20;
    let delay = 0,
        animateTo = {},
        settings = {
          duration: 500,
          easing: 'easeInOutExpo',
        };

    if (!isOpen) {
      animateTo = {
        opacity: 0,
      }
      Velocity(
        this.refs.circle,
        {width: '0px', height: '0px'},
        {
          duration: 100,
          mobileHA: false
        }
      )
    } else {
      animateTo = {
        opacity: 1,
      }
      Velocity(
        this.refs.circle,
        {width: `${winBox}px`, height: `${winBox}px`},
        {
          duration: 400,
          mobileHA: false
        }
      )
    }

    Object.entries(items).forEach(([index, elem]) => {
      delay = index * 100;
      if (isOpen) {
        settings.delay = delay;
        settings.complete = () => {
          elem.classList.add('active');
        }
      } else {
        elem.classList.remove('active');
      }
      Velocity(
        elem,
        animateTo,
        settings,
      );
    });
  }
  componentWillReceiveProps(next) {
    if(!next.navigation) {
      this.transitionOpen(false);
    }
  }
  render() {
    const { navigation, section } = this.props;
    const show = navigation.open ? 'active' : '';
    return (
      <StyledNavigation className="navigation" isTop={section}>
        <div className="grid-col-18 grid-18">
          <Logo classes="grid-col-9" />
          { this.createMainNav() }
          <a className="hamburger-btn" href="#hamburger" onClick={(evt) => this.openHamburger(evt)}>hamburger</a>
        </div>
        <div className={`${show} hamburger-menu`}>
          <span className="circle" ref="circle" style={this.circleSetup()}></span>
          { this.createMainNav() }
        </div>
      </StyledNavigation>
    )
  }
}

Navigation.propTypes = {
  navigation: PropTypes.object,
  navigationOpen: PropTypes.func,
  section: PropTypes.bool,
}

Navigation.defaultProps = {
  section: false,
  navigation: { open: false },
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    section: state.section.intro
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigationOpen: (open) => {
    dispatch(navigationOpen(open))
  },
})

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column: span 24;
  align-items: center;
  height: 125px;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(51,63,106, 0);
  z-index: ${zdepth('high')};
  transition: background .3s;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(var(--blueberry));
    opacity: ${props => !props.isTop ? '.9' : '0'};
    z-index: ${zdepth('lowest')};
    transition: all .4s var(--fastanimation);
  }
  & > *{
    position:relative;
    z-index: ${zdepth('low')};
  }
  .grid-18{
    grid-column: 4 / span 18;
    align-items: center;
  }
  ul{
    li{
      display: inline-block;
      margin-right: 60px;
      text-transform: uppercase;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .hamburger-btn{
    height: 20px;
    width: 20px;
    position: absolute;
    right: 20px;
    top: 3px;
    display: none;
    overflow: hidden;
    text-indent: 9999px;
    z-index: ${zdepth('highest')};
    &:before, &:after{
      content: '';
      width: 100%;
      height: 1px;
      background: rgb(var(--snow));
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
      transition: all .4s;
    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  &.active{
    .hamburger-btn{
      &:after{
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
      &:before{
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      }
    }
  }
  .hamburger-menu{
    position: fixed;
    top: 0;
    right: 0;
    z-index: ${zdepth('highest')};
    background: rgb(var(--blueberry));
    width: 100%;
    height: 100vh;
    opacity:0;
    pointer-events: none;
    transition: opacity .2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all .8s;
    .circle{
      width: 0;
      height: 0;
      background: rgb(var(--radish));
      position: absolute;
      border-radius: 50%;
    }
    ul li{
      display: block;
      position: relative;
      .borderElem{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        height: 1px;
        width: 0;
        opacity: .3;
        background: rgba(255,255,255,.5);
        transition: all 3s ease-in-out;
      }
    }
    &.active{
      opacity:1;
      pointer-events: auto;
      background: rgb(var(--radish));
      ul{
        display: block;
        text-align: center;
        padding-top: 90px;
        width: 50%;
        margin: 0 auto;
        li{
          margin: 0;
          position: relative;
          display: block;
          padding-bottom: 80px;
          margin-bottom: 80px;
          opacity: 0;
          &.active{
            .borderElem{width: 50%;}
          }
          &:last-child{
            .borderElem{display: none;}
          }
          a{font-size: 2.0rem;opacity:1;}
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(18, 1fr);
    grid-column: span 18;
    height: 90px;
    top: 0;
    
    .grid-18{
      grid-column: 2 / span 16;
      align-items: center;
    }
    h1{
      grid-column: span 18;
      text-align: center;
      position: relative;
      z-index: ${zdepth('high')};
      a{opacity: 1; transition: all .4s;}
    }
    &.active{
      h1{
        a{opacity: 0;};
      }
    }
    ul{
      display: none;
    }
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
