/** @format */

import { useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from 'react-redux';

import brand from "../images/libel-logo.png";

import path from "../routes/path";
import LoginSidebar from "./LoginSidebar";
import DropdownMenu from './DropdownMenu';



const Navigation = () => {
  const { user } = useSelector((state) => state.user);
  const [login, setLogin] = useState(false);

  const handleCloseLogin = () => {
    setLogin(false);
  };

  
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand={"lg"}
      className="navigation shadow-sm"
    >
      <Container>
        <Navbar.Brand as={NavLink} to={path.home}>
          <Image src={brand} alt="Libel Academy" height={40} />
        </Navbar.Brand>

        <div className="navigation_desktop d-none d-lg-flex">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={path.home}>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to={path.courses.home}>
              Cursos
            </Nav.Link>
          </Nav>
          <Nav className="ms-2 ps-2 border-start border-secondary">
            {!user ? (
              <>
              <Button
              className="ms-2"
              variant="outline-light"
              onClick={() => {
                setLogin(true);
              }}
            >
              Ingresar
            </Button>
            <Button className="ms-2" as={Link} to={path.register}>
              Registrar
            </Button>
                
              </>
            ) : (
              <DropdownMenu />
            )}
            
          </Nav>
          <LoginSidebar show={login} handleClose={handleCloseLogin} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
