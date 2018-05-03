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
    this.state = {ready: false};
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

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 400); 
  }

  render() {
    const { ready } = this.state;
    const { navigation, section } = this.props;
    return (
      <React.Fragment>
        <StyledNavigation isTop={section} className="grid-24 grid-col-24" ready={ready}>
          <div className="grid-col-18 grid-18">
            <Logo classes="grid-col-9" />
            <NavigationMenu menu={this.navConfig} mobile={false} />
          </div>
          <StyledHamburgerBtn href="#hamburger" onClick={(evt) => this.openHamburger(evt)}>hamburger</StyledHamburgerBtn>
        </StyledNavigation>
        <HamburgerNav show={navigation.open} menu={this.navConfig} />
      </React.Fragment>
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
  transition: background .3s, opacity .8s ease 1s;
  z-index: ${zdepth('high')};
  grid-template-rows: 1;
  opacity: ${props => props.ready ? '1' : '0'};
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
    @media screen and (min-width: 768px){
      grid-column: 4 / span 18;
    }
    align-items: center;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(18, 1fr);
    grid-column: span 18;
    height: 90px;
    top: 0;
    .grid-18{
      align-items: center;
      grid-row-start: 1;
      ul{display: none;}
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

const StyledHamburgerBtn = styled.a`
  position: absolute;
  top: 35px;
  right: 30px;
  height: 20px;
  width: 20px;
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
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
