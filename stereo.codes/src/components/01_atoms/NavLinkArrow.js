import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigationOpen } from '../../actions/navigation-actions';
import styled from 'styled-components';
const Velocity = require('velocity-animate');


class NavLink extends Component {
  constructor(props){
    super(props)
    this.handleScrollTo.bind(this);
  }
  handleScrollTo(evt,url) {
    const scrollToElem = document.querySelector(url);
    this.props.navigationOpen(false);
    Velocity(scrollToElem, "scroll",  { duration: 1500, queue: false, offset: -150, easing: "easeOutCirc" });

    evt.preventDefault();
    return false;
  }
  render() {
    return (
      <LinkStyled
        href={this.props.url}
        onClick={(evt) => this.handleScrollTo(evt, this.props.url)}
        className={`${this.props.classes}`}
      >
        <span className="button-text">{ this.props.title }</span>
        { this.props.children }
      </LinkStyled>
    )
  }
}

NavLink.defaultProps = {
  url: '',
  title: '',
  classes: '',
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
  navigationOpen: PropTypes.func,
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
    z-index: 2;
    transition: all .4s;
    &:before{
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      width: 1px;
      background: rgb(var(--radish));
      z-index: 1;
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
      height: 1px;
      background: white;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 1;
      transition: all .4s;
    }
    .button-arrow-head{
      position: absolute;
      z-index: 2;
      top: 50%;
      right: -4px;
      height: 20px;
      width: 13px;
      transform: translateY(-50%);
      &:before, &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: white;
        right: 0;
        border-radius: 50%;
        transition: all .4s;
      }
      &:before{
        top: 0;
        transform-origin: left center;
        transform: rotate(45deg);
      }
      &:after{
        bottom: 0;
        transform-origin: left center;
        transform: rotate(-45deg);
      }
    }
  }
  &:before,&:after{
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: rgb(var(--radish));
    z-index: 1;
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
        background: rgb(var(--radish));
      }
      .button-arrow-head{
        &:before,&:after{
          background: rgb(var(--radish));
        }
      }
    }
    &:before{width: 100%;}
  }
`;

export default connect(
  null,
  mapDispatchToProps
)(NavLink)
