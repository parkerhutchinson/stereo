import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavLink from '../01_atoms/NavLink';
import { connect } from 'react-redux';
import { showNav } from '../../actions/navigation-actions';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
const Velocity = require('velocity-animate');

class Navigation extends Component {
  constructor() {
    super();
    this.navConfig = {
      about: '.about',
      work: '.work',
      contact: '.contact',
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
    if (!this.props.showNavState) {
      this.props.showNav(true);
      this.transitionOpen(true);
    } else {
      this.props.showNav(false);
      this.transitionOpen(false);
    }

    // evt.preventDefault();
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
    if(!next.showNavState) {
      console.log(next);
      this.transitionOpen(false);
    }
  }
  render() {
    const show = this.props.showNavState ? 'active' : '';
    return (
      <StyledNavigation className={`${show} navigation`}>
        <div className="grid-col-18 grid-18">
          <Logo classes="grid-col-9" />
          { this.createMainNav() }
          <a className="hamburger-btn" href="#hamburger" onClick={(evt) => this.openHamburger(evt)}>hamburger</a>
        </div>
        <div className={`${show} hamburger`}>
          <span className="circle" ref="circle" style={this.circleSetup()}></span>
          { this.createMainNav() }
        </div>
      </StyledNavigation>
    )
  }
}

Navigation.propTypes = {
  showNavState: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    showNavState: state.hamburgNavigation.show,
  }
}

const mapDispatchToProps = (dispatch) => ({
  showNav: (show) => {
    dispatch(showNav(show))
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
  z-index: 100;
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
    top: 20px;
    z-index: 3;
    display: none;
    overflow: hidden;
    text-indent: 9999px;
    z-index: 10;

    &:before, &:after{
      content: '';
      width: 100%;
      height: 1px;
      background: var(--snow);
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
  .hamburger{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background: var(--blueberry);
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
      background: var(--radish);
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
      background: var(--radish);
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
    .grid-18{
      grid-column: 2 / span 16;
      align-items: center;
    }
    h1{
      grid-column: span 18;
      text-align: center;
      position: relative;
      z-index: 3;
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
