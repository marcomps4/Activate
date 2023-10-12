import { useState, useEffect } from "react";
import { Navbar,Container ,Nav, NavDropdown} from "react-bootstrap";
import logo from '../img/logo.svg';
import {CiStreamOn} from "react-icons/ci";




export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, seScrolled] = useState(false);

    useEffect (() => {
        const oneScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", oneScroll);
        return () => window.removeEventListener("scroll", oneScroll);
    }, [])

    const onUUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="logo Activate"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUUpdateActiveLink  ("home")}>Inicio</Nav.Link>
            <Nav.Link href="#acerca" className={activeLink === "acerca" ? "active navbar-link" : "navbar-link"} onClick={() => onUUpdateActiveLink ("acerca")}>Acerca de</Nav.Link>
            <Nav.Link href="#ponentes" className={activeLink === "ponentes" ? "active navbar-link" : "navbar-link"} onClick={() => onUUpdateActiveLink ("ponentes")}>Ponentes</Nav.Link>
            <Nav.Link href="#programa" className={activeLink === "programa" ? "active navbar-link" : "navbar-link"} onClick={() => onUUpdateActiveLink ("programa")}>Programa</Nav.Link>
            <Nav.Link href="#lugar" className={activeLink === "lugar" ? "active navbar-link" : "navbar-link"} onClick={() => onUUpdateActiveLink ("lugar")}>Lugar</Nav.Link>
            <NavDropdown title="Eventos anteriores" id="basic-nav-dropdown" >
            <NavDropdown.Item href="https://recursosvead.ecci.edu.co/encuentro/index.html" target="_blank" >Version 2017<i className="bi bi-caret-down-fill"></i></NavDropdown.Item>
            <NavDropdown.Item href="https://recursosvead.ecci.edu.co/experienciasignificativas/index.html" target="_blank">Version 2019</NavDropdown.Item>
            <NavDropdown.Item href="https://recursosvead.ecci.edu.co/experienciasignificativas2021/index.html" target="_blank">Version 2021</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
          <button><a href="https://www.youtube.com/@EDUCADIGITAL_/streams" target="_blank"><span>Conéctate <CiStreamOn size={35}/></span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


