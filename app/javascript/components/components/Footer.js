import React, { Component } from "react";
import "./footer.css";
import arck from "../images/arcklogo.png";
import { Nav, NavItem, NavLink } from "reactstrap";



export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <hr className="footer-seperator" />
          <section className="footer-social-media">
            {/*<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>*/}
          </section>
          <section className="footer-info">
            <section className="footer-info-left">
              <section className="footer-info__name">
                <h1>Keep Digging!</h1>
              </section>
            </section>

            <section className="footer-info-center">
              <section className="footer-info__terms">
                <br />
                <br />
                <img src={arck} class="arck" />
                <div class="navlink">
                  <Nav>
                    <NavItem>
                      <NavLink href="/aboutus">About Us</NavLink>
                    </NavItem>
                  </Nav>
                </div>
               
                <br />
                Copyright © 2022 | ARCK lab
              </section>
            </section>
            <section className="footer-info-right">
              <section className="footer-info__number">
                {/* <img src = {arck} class = "arck" /> Logo? */}
              </section>
              <section className="footer-info__contact">
                <img src="app/assets/logos/arcklogo.png" />
                About Us!
              </section>
            </section>
          </section>
          <hr className="footer-seperator" />
        </section>
      </>
    );
  }
}

// import React, { Component } from "react";
// import arcklogo from '../images/arcklogo.png'
// import {
//     Nav, NavItem, NavLink
// } from "reactstrap";

// export default class Footer extends Component {
//     render() {
//         return(
//         <footer>

//             <div className="footer-style">
//             <Nav>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     Terms
//                 </NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     Privacy
//                 </NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     Security
//                 </NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     Docs
//                 </NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     Contact
//                 </NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink
//                     href="https://github.com/mrcallenmatias" target="_blank"
//                 >
//                     About
//                 </NavLink>
//                 </NavItem>
//                 </Nav>
//                 <Nav className="copyright">
//                     <img src={ arcklogo} className="footer-logo"/>      &copy; 2022 CryptoTinder by Marc & Curtis
//                 </Nav>
//             </div>

//         </footer>
//         )
//     }
// }
