import React, { Component } from 'react';
import Logo from '../01_atoms/Logo';
import NavigationMenu from '../02_molecules/NavigationMenu';
import HamburgerNav from './HamburgerNav';
import { connect } from 'react-redux';
import { navigationOpen } from '../../actions/navigation-actions';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';

class Navigation extends Component {
  constructor() {
    super();
    this.navConfig = [
      {url: '.about', title: 'about'},
      {url: '.work', title: 'work'},
      {url: '.connect', title: 'connect'},
    ]
    this.openHamburger.bind(this);
  }

  openHamburger(evt) {
    if (!this.props.navigation.open) {
      this.props.navigationOpen(true);
    } else {
      this.props.navigationOpen(false);
    }

    evt.preventDefault();
    return false;
  }

  render() {
    const { navigation, section } = this.props;
    return (
      <StyledNavigation isTop={section} className="grid-24 grid-col-24">
        <div className="grid-col-18 grid-18">
          <Logo classes="grid-col-9" />
          <NavigationMenu menu={this.navConfig} mobile={false} />
          <a className="hamburger-btn" href="#hamburger" onClick={(evt) => this.openHamburger(evt)}>hamburger</a>
        </div>
        <HamburgerNav open={navigation.open} menu={this.navConfig} />
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
    section: state.section.intro,
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigationOpen: (open) => {
    dispatch(navigationOpen(open))
  },
})

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background: rgba(51,63,106, 0);
  z-index: ${zdepth('high')};
  transition: background .3s;
  z-index: ${zdepth('low')};
  &.grid-24{align-items: center;}
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
  .grid-col-18{
    grid-column: 4 / span 18;
    align-items: center;
  }
  .hamburger-btn{
    position: relative;
    height: 20px;
    width: 20px;
    display: none;
    overflow: hidden;
    text-indent: 9999px;
    z-index: ${zdepth('highest')};
    grid-column-start: 16;
    grid-column-end: 17;
    grid-row-end: 1;
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
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
