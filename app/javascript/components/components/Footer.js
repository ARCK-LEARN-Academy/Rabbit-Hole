import React, { Component } from "react";
import "./footer.css";
import arck from "../images/arcklogo.png";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      //       <>

      //         <div className="footer">
      // <Nav>
      //   <NavItem className="foot">
      //     <NavLink href="/aboutus">About Us</NavLink>

      //   </NavItem>

      // </Nav>

      //         </div>

      //       </>
      //     );
      //   }
      // }

      <>
        <div className="footer-style">
          <Nav className="copyright">
            <br />
            <img src={arck} className="footer-logo" /> &copy; 2022 Rabbit Hole
            by Alex | Ramon | Curtis | Keelan
          </Nav>
        </div>

        <Nav className="foot">
          <NavItem >
            <NavLink href="/aboutus">About Us</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="/aboutus">Contact</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="/aboutus">Terms</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="/aboutus">Privacy</NavLink>
          </NavItem>
        </Nav>
      </>
    );
  }
}
