import React, {Component} from "react";
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";


export default class Header extends Component {
    render() {
        return(
            <>
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            logo
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck(){}} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/catindex">
                                    Filler
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            <NavLink href="/catnew">Add a Post</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink href="/catindex">Add a Burrow</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>
                                Login/Sign up
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            </>

        )
    }
}