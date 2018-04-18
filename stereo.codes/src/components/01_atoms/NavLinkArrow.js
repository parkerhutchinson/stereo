import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigationOpen } from '../../actions/navigation-actions';
import styled from 'styled-components';
import { zdepth } from '../../lib/styled-helpers';
const Velocity = require('velocity-animate');


class NavLink extends Component {
  constructor(props){
    super(props)
    this.handleScrollTo.bind(this);
  }
  handleScrollTo(evt,url) {
    if (!this.props.scrollTo) return;
    const scrollToElem = document.querySelector(url);
    this.props.navigationOpen(false);
    Velocity(scrollToElem, "scroll",  { duration: 1500, queue: false, offset: -150, easing: "easeOutCirc" });

    evt.preventDefault();
    return false;
  }
  render() {
    const {url, classes, title, children, ...other} = this.props;
    return (
      <LinkStyled
        href={url}
        onClick={(evt) => this.handleScrollTo(evt, url)}
        className={`${classes}`}
        {...other}
      >
        <span className="button-text">{ title }</span>
        { children }
      </LinkStyled>
    )
  }
}

NavLink.defaultProps = {
  url: '',
  title: '',
  classes: '',
  scrollTo: false,
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
  navigationOpen: PropTypes.func,
  scrollTo: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => ({
  navigationOpen: (show) => {
    dispatch(navigationOpen(show))
  }
})
const buttonPadding = '23px';
const LinkStyled = styled.a`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  font-size: 1.2rem;
  border-right: 1px solid rgb(var(--radish));
  align-items: center;
  justify-content: space-around;
  padding-right: ${buttonPadding};
  transform: translate3d(0,0,0);
  .button-text{
    padding: ${buttonPadding};
    display: inline-block;
    position: relative;
    z-index: ${zdepth('mid')};
    transition: all .4s;
    text-transform: uppercase;
    &:before{
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      width: 1px;
      background: rgb(var(--radish));
      z-index: ${zdepth('low')};
    }
    &:before{
      left: 0;
      bottom: 0;
      height: 0;
      transition: all .4s;
    }
  }
  .button-arrow{
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    transition: all .4s;
    transform: scale(.8);
    &:before{
      content: '';
      display: inline-block;
      height: 0px;
      border-bottom: 1px solid rgb(var(--snow));
      stroke-linecap: round;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: ${zdepth('low')};
      transition: all .4s;
    }
    .button-arrow-head{
      position: absolute;
      z-index: ${zdepth('mid')};
      top: 50%;
      right: 2px;
      height: 15px;
      width: 15px;
      transform: translateY(-50%) rotate(-45deg);
      border-right: 1px solid rgb(var(--snow));
      border-bottom: 1px solid rgb(var(--snow));
      stroke-linecap: round;
      transition: all .4s;
    }
  }
  &:before,&:after{
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: rgb(var(--radish));
    z-index: ${zdepth('low')};
  }
  &:before{
    top: 0;
    right: 0;
    width: 50%;
    transition: all .4s;
  }
  &:after{
    bottom: 0;
    right: 0;
  }
  &:hover{
    .button-text{
      padding-left: ${buttonPadding};
      &:before{height: 100%;}
    }
    .button-arrow{
      width: 43px;
      &:before{
        border-color: rgb(var(--radish));
      }
      .button-arrow-head{
        border-color: rgb(var(--radish));
      }
    }
    &:before{width: 100%;}
  }
`;

export default connect(
  null,
  mapDispatchToProps
)(NavLink)
