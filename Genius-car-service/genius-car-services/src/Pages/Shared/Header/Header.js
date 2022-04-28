import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/MyCustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to={"/home"} className="header-link">
              Home
            </CustomLink>
            <CustomLink to={"/about"} className="header-link">
              About
            </CustomLink>
            <CustomLink
              to={"/services"}
              className="header-link"
              href="/services"
            >
              Services
            </CustomLink>
            <CustomLink to={"/experts"} className="header-link" href="#experts">
              Experts
            </CustomLink>

            {user ? (
              <>
                <CustomLink to={"/addService"} className="header-link">
                  Add Service
                </CustomLink>
                <CustomLink to={"/manageService"} className="header-link">
                  Manage Service
                </CustomLink>
                <button onClick={handleSingout}>Logout</button>
              </>
            ) : (
              <CustomLink to={"/login"} className="header-link">
                Login
              </CustomLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
