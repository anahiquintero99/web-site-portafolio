import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="align-item-center">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anahi-quintero-granados-41b300206/">
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://www.instagram.com/anahi_quintero99/">
            <img src={navIcon3} alt="" />
          </a>
        </div>
        <p>CopyRight 2022 by Anahi Quintero </p>
      </Container>
    </footer>
  );
};
