import React, { Component } from 'react';
import { Link as RawLink } from 'react-router';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { ui, spacing } from '../ui';
import { logout } from '../actions/logout';
import logo from '../../static/media/clapper-logo.svg';

const Wrapper = styled.header`
  background-color: ${ui('primary')};
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

  ${props =>
    props.user &&
    css`

    li {
      margin-left: 0;
      margin-right: ${spacing()};
    }
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
  box-shadow: 0 0 0 1px #fff;
  border-radius: 4px;
  padding: ${spacing(0.5)} ${spacing(0.75)};
  transition: box-shadow 150ms ease;

  &:hover {
    box-shadow: 0 0 0 2px #fff;
  }
`;

class Header extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatchLogout();
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
              <Link to="/">Ma bibliothèque</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Mes amis</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Ma wishlist</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Activités</Link>
            </NavigationItem>
          </NavigationList>
          <NavigationList user>
            <NavigationItem>
              <Link to="/">Paramètres</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Mon profil</Link>
            </NavigationItem>
            <NavigationItem>
              <Button onClick={this.handleLogout}>Se déconnecter</Button>
            </NavigationItem>
          </NavigationList>
        </Nav>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Header);
