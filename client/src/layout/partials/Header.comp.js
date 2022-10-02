import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import { userLogout } from "../../api/userApi";
import tikkitLogo from '../../assets/img/tikkitLogo.png';
import freedom from '../../assets/img/freedom-title-logo.png';

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("tikkit");
    userLogout();
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect variant="dark" expand="md" className='freedom-grad'>
        <Navbar.Brand>
          <img src={tikkitLogo} className="mr-3" alt="logo" width="140px" />

          <img src={freedom} className="ml-2" alt="logo" width="120px" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/tickets">
              <Nav.Link>Statements</Nav.Link>
            </LinkContainer>

            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
