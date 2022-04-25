import React, { Component } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import "./headerstyles.css";
import rabbithole from "../images/rabbitlogo.png";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">
              <img src={rabbithole} class="rabbitlogo" />
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink></NavLink>
                </NavItem>

                {logged_in && (
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Options
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem>
                        <NavLink href="/postnew">Create Post</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/burrowindex">Create Burrow</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Nav>
              <NavbarText>
                <Nav>
                  {logged_in && (
                    <NavItem>
                      <a href={sign_out_route} className="nav-link">
                        Sign Out
                      </a>
                    </NavItem>
                  )}
                  {!logged_in && (
                    <NavItem>
                      <a href={sign_in_route} className="nav-link">
                        Sign In
                      </a>
                    </NavItem>
                  )}
                  {!logged_in && (
                    <NavItem>
                      <a href={new_user_route} className="nav-link">
                        Sign Up
                      </a>
                    </NavItem>
                  )}
                </Nav>
              </NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}
