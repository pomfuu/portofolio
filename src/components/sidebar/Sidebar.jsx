import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./sidebar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Sidebar = () => {
    const dot = {
        color: '#0116CE',
        border: 'none',
    };

    return (
        <section>
            <div className="container sticky top-0">
            <div className="row">
                <div className="col">
                    {[false].map((expand) => (
                            <Navbar expand="lg" className="mb-3 bg-transparent border-none">
                            <Container>
                              <Navbar.Brand href="#home" className="fw-semibold logo fs-1">LIN<b style={dot}>.</b></Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto gap-5">
                                  <Nav.Link href="#skill" className=" fw-semibold menu-item" style={{ fontSize: '1.1rem', color:'#1e1e1e' }}>Skill</Nav.Link>
                                  <Nav.Link href="#work" className=" fw-semibold menu-item" style={{ fontSize: '1.1rem', color:'#1e1e1e' }}>Projects</Nav.Link>
                                  <Nav.Link href="#resume" className=" fw-semibold menu-item" style={{ fontSize: '1.1rem', color:'#1e1e1e' }}>Resume</Nav.Link>
                                </Nav>
                              </Navbar.Collapse>
                            </Container>
                          </Navbar>              
                    ))}
                </div>
            </div>
            </div>
        </section>
      );
}

export default Sidebar