import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
          <NavLink className="navbar-brand" to="/">
            UNCW Public Health Travel Study Uganda
          </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink href="/home" className="nav-link" to="/">Home</NavLink>
              </Nav>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/uganda">
                      Uganda
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/excursions">
                      Excursions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/paststudents">
                      Past Students' 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/scholarship">
                      Scholarship 
                    </Link>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
  }
  