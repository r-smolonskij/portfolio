import React, { useState } from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import { useAuth0 } from "../../react-auth0-spa";
import auth0Client from "../../services/auth0";

const Login = () => {
  return (
    <span
      onClick={auth0Client.login}
      className="nav-link port-navbar-link clickable"
    >
      Login
    </span>
  );
};
const Logout = () => {
  return (
    <span
      onClick={auth0Client.logout}
      className="nav-link port-navbar-link clickable "
    >
      Logout
    </span>
  );
};
const BsNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const Header = (props) => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated, user, className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="transparent"
        dark
        expand="md"
        className=  {`port-navbar port-nav-base absolute ${className}`}
      >
        <NavbarBrand href="/" className="port-navbar-brand">
          Russo
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home"></BsNavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About"></BsNavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolio"></BsNavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blog"></BsNavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV"></BsNavLink>
            </NavItem>
            {!isAuthenticated && (
              <NavItem className="port-navbar-item">
                <Login></Login>
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <Logout></Logout>
              </NavItem>
            )}
            {isAuthenticated && (
              <span className="nav-link port-navbar-link">Hello, {user.name}</span>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
