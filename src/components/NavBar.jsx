import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import linkedin from "../assets/img/nav-icon1.svg";
import instagram from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.png";
import menuNavbar from "../assets/img/menu-navbar.png";
import { WhatsAppButton } from "../components/whatsapp/whatsapp-icon";

export const NavBar = () => {
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon">
            <img className="menu-navbar" src={menuNavbar} alt="" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anahi-quintero-granados-41b300206/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/anahi_quintero99/">
                <img src={instagram} alt="" />
              </a>
              <a href="https://github.com/anahiquintero99">
                <img src={github} alt="" />
              </a>

              <WhatsAppButton />
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
