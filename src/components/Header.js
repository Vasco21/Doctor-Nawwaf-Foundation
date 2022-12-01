import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "react-router-dom";
import { logout } from "../actions/userActions";
import logo from "../images/logo.png";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-color" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        </Navbar.Brand>
        <Navbar.Brand href="/layout"><i className="fa-solid fa-house-user"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            <Dropdown >
              <Dropdown.Toggle className="btn-call">
                <strong>ABOUT</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/history">
                  History
                </Dropdown.Item>
                <Dropdown.Item href="/mission">
                  Mission
                </Dropdown.Item>
                <Dropdown.Item href="/staff">
                  Staff & Board
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="btn-call">
                <strong>SERVICES</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/employment">
                  Employment Services
                </Dropdown.Item>
                <Dropdown.Item href="/education">
                  Quality Education
                </Dropdown.Item>
                <Dropdown.Item href="/health">
                  Good Health
                </Dropdown.Item>
                <Dropdown.Item href="/innovation">
                  Innovation and Infrastructure
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="btn-call">
                <strong>NEWS & EVENTS</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/news">
                  News
                </Dropdown.Item>
                <Dropdown.Item href="/events">
                  Events
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/contact">
              <strong>Contact Us</strong>
            </Nav.Link>
            {userInfo ? (
              <>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/covid">
                    COVID-19 Response
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/chapters">
                    Chapters
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
