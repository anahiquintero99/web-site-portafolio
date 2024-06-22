import { Container } from "react-bootstrap";
import linkedin from "../assets/img/nav-icon1.svg";
import instagram from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.png";
import { WhatsAppButton } from "../components/whatsapp/whatsapp-icon";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="align-item-center">
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
        <p>CopyRight 2022 by Anahi Quintero </p>
      </Container>
    </footer>
  );
};
