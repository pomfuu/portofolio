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
                        <Navbar key={expand} expand={expand} className="mb-3 bg-transparent border-none">
                        <>
                            <Navbar.Brand href="#" className="fw-semibold logo fs-1">LIN <b style={dot}>.</b></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={dot} />
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="border-none"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="logo border-none fs-1">
                                LIN <b style={dot}>.</b>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 gap-3 fs-5 mx-2">
                                <Nav.Link href="#abour">About Me</Nav.Link>
                                <Nav.Link href="#skill">Skills</Nav.Link>
                                <Nav.Link href="#project">Projects</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </>
                        </Navbar>
                    ))}
                </div>
            </div>
            </div>
        </section>
      );
}

export default Sidebar