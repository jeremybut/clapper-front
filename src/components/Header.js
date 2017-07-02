import React, { Component } from 'react';
import { Link as RawLink } from 'react-router';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import DropdownMenu from './DropdownMenu';
import { ui, spacing } from '../ui';
import logo from '../../static/media/clapper-logo.svg';

const Wrapper = styled.header`
  background-color: ${ui('secondary')};
  width: 100%;
  padding: ${spacing(0.5)};
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${props =>
    props.logo &&
    css`
    margin-right: ${spacing(2)};

    li {
      margin-left: 0;
    }
  `};

  ${props =>
    props.navigation &&
    css`
    flex: 1;
  `};
`;

const NavigationItem = styled.li`
  margin-right: ${spacing(1.5)};
`;

const Link = styled(RawLink)`
  color: rgba(255,255,255,.9);
  transition: color 150ms ease;

  &:hover {
    color: #fff;
  }
`;

const Button = styled.button`
  border: 1px solid rgba(255,255,255,.8);
  border-radius: 4px;
  padding: ${spacing(0.5)} ${spacing(0.75)};
  transition: border-color 150ms ease;

  &:hover {
    border-color: #fff;
  }
`;

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper>
        <Nav>
          <NavigationList logo>
            <NavigationItem>
              <Link to="/">
                <img src={logo} alt="Logo Clapper" />
              </Link>
            </NavigationItem>
          </NavigationList>
          <NavigationList navigation>
            <NavigationItem>
              <Link to="/">Médiathèque</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Amis</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Wishlist</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Activités</Link>
            </NavigationItem>
          </NavigationList>
          <DropdownMenu />
        </Nav>
      </Wrapper>
    );
  }
}


export default Header;
