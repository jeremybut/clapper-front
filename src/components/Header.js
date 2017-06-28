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
  padding: ${spacing()};
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
`;

const NavigationItem = styled.li`
  margin-left: ${spacing()};

  ${props => props.logo && css`
    margin-right: ${spacing(3)};
  `}
`;

const Link = styled(RawLink)`
  color: #fff;
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
          <NavigationList>
            <NavigationItem logo>
              <Link to='/'>
                <img src={logo} alt='Logo Clapper' />
              </Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/">Accueil</Link>
            </NavigationItem>
          </NavigationList>
          <NavigationList>

            <NavigationItem>
              <button onClick={this.handleLogout}>Se déconnecter</button>
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
