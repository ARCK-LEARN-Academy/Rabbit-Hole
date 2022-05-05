import React, { Component } from "react";
import "./headerstyles.css";
import rabbithole from "../images/rabbitlogo.png";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";



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
        <div className="header">
          <Navbar color="#272727" expand="md" light>
            <NavbarBrand href="/"> 
            <img src={rabbithole} className="rabbitlogo" />
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavLink href="/">
                <h1 style={{
                  color:"#FAB162",
                  paddingTop:"5px",
                  fontSize:"48px"}}>Rabbit Hole</h1>
                  </NavLink>
              </Nav>

              <NavbarText>
                <Nav>
                <NavItem>
                    <NavLink href="/">
                    <h5 className="nav-link">Home</h5></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/burrowcards">
                    <h5 className="nav-link">Burrows</h5></NavLink>
                  </NavItem>
                
                {logged_in && (
                  <NavItem>
                    <NavLink href="/burrownew">
                    <h5 className="nav-link">Create Burrow</h5></NavLink>
                  </NavItem>
                )}

                  {logged_in && (
                    <NavItem>
                      <a href={sign_out_route} className="nav-link">
                        <h5 className="nav-link">Sign Out</h5>
                      </a>
                    </NavItem>
                  )}
                  {!logged_in && (
                    <NavItem>
                      <a href={sign_in_route} className="nav-link">
                      <h5 className="nav-link">Sign In</h5>
                      </a>
                    </NavItem>
                  )}
                  {!logged_in && (
                    <NavItem>
                      <a href={new_user_route} className="nav-link">
                      <h5 className="nav-link">Sign Up</h5>
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

