import React, { useEffect } from "react";
import { useState, Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi"
import { Link, NavLink } from "react-router-dom/";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "bootstrap";

function Header() {
  const history = useHistory();


  const handleOut = () =>{

    
    localStorage.removeItem("user-info")
    history.push("/login");
  }

  const token = localStorage.getItem("user-info");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Nav.Link>
            <Link className="logotext" to="/">
              Marvel<sub className="logotextsmall">The</sub>Gym
            </Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
             

              {token ? (
                <>
                
                  <Nav.Link>
                    <NavLink to="/view" className="Rightmenu">
                      Dashboard
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/register" className="Rightmenu">
                      Register
                    </NavLink>
                  </Nav.Link>
                  {/* <Nav.Link> */}
                  
                  <button onClick={handleOut} > <BiLogOut  size={25}  /> </button>

                  {/* </Nav.Link> */}
                </>
              ) : (
                <>
                <Nav.Link>
                <Link to="/" className="Rightmenu">
                  <FaHome size={30} className="pb-2" />
                </Link>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/aboutus" className="Rightmenu">
                  About Us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contactus" className="Rightmenu">
                  Contact Us
                </NavLink>
              </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/login" className="Rightmenu">
                     Admin Login
                    </NavLink>
                  </Nav.Link>
                </>
              )}

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
