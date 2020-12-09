import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import SideNav from "react-simple-sidenav";
import Logo from "../../images/logo-image.png";

import navStyles from "./navbar.module.css";

import { FaHome } from "react-icons/fa";

//then

const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "white" : ""}
        variant={scroll ? "light" : "dark"}
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container fluid>
          <Nav.Item to="/">
            <Navbar.Brand as={Link} to="/" rel="preload">
              <img
                className="d-inline-block align-top"
                src={Logo}
                alt="Logo"
                height="60"
              ></img>
              <span
                className={scroll ? "d-inline-block mt-3" : "d-none"}
                style={{ marginLeft: "-10px", letterSpacing: "1px" }}
              >
                UEER CONSCIOUS
              </span>
            </Navbar.Brand>
          </Nav.Item>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              /*display: "flex",*/
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav 
            className="ml-auto" 
            defaultActiveKey="/"
            onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              {/*<Nav.Item to="/coaching" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/coaching" active={false} rel="preload">
                  Coaching
                </Nav.Link>
          </Nav.Item>*/}
              <NavDropdown
                as={Link}
                href="/coaching"
                to="/coaching"
                eventKey="coaching"
                title="Coaching"
                id="nav-dropdown-coaching"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/coaching">
                  {" "}
                  Coming Out Coaching{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/coaching/challenge">
                  Queer Liberation Challenge
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/coaching/queerwayforward">
                  Group Coaching
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item to="/about" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/about" active={false} rel="preload">
                  About
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/community" className={navStyles.navItem}>
                <Nav.Link
                  as={Link}
                  to="/community"
                  active={false}
                  rel="preload"
                >
                  Community
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item
                to="/contact"
                className={navStyles.navItem}
                rel="preload"
              >
                <Nav.Link as={Link} to="/contact" active={false}>
                  Contact
                </Nav.Link>
              </Nav.Item>*/}
              <Nav.Item
                href="https://members.queerconscious.com/login"
                className={navStyles.navItem}
                rel="preload"
              >
                <Nav.Link
                  href="https://members.queerconscious.com/login"
                  active={false}
                >
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            ></Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/about">
                About
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/coaching">
                Coaching
              </Link>,

              <Link rel="preload" className={navStyles.navItem} to="/community">
                Community
              </Link>,
              <a
                rel="preload nofollow"
                className={navStyles.navItem}
                href="https://members.queerconscious.com/login"
              >
                Login
              </a>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
              listStyle: "none",
            }}
            navStyle={{
              width: "70%",
              background: "rgba(255,255,255,0.9)",
              color: "rgba(204, 174, 161, 1)",
              maxHeight: "100vh",
              listStyle: "none",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
