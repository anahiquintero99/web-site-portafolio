import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import avatar1 from "../assets/img/avatar1.svg";

export const Paradax = () => {
  return (
    <section className="paradax" id="paradax">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5} style={{ zIndex: "1000" }}>
            <img className="paradaxImg" src={avatar1} alt="Header Img"></img>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <h2 className="title-paradax"> ¡Frase inspiradora! </h2>
            <span class="paradax-description">
              El arte desafía a la tecnología y la tecnología inspira al arte.
            </span>
            <p class="paradax-by">John Lasseter</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
