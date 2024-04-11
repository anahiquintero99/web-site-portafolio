import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/bg-avatar.svg";

export const Banner = () => {
  const [loopNum, setLooNum] = useState(0);
  const [isDeliting, setIsDeliting] = useState(false);
  const toRotate = ["Web Developer", "Web Design", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeliting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeliting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeliting && updatedText === fullText) {
      setIsDeliting(true);
      setDelta(period);
    } else if (isDeliting && updatedText === "") {
      setIsDeliting(false);
      setLooNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="container-header-details">
        <Row>
          <Col className="container-details-header">
            <span className="tagline">¡Bienvenido!</span>
            <h1>
              {`¡Hola! Soy Anahi Quintero`} <span className="wrap">{text}</span>{" "}
            </h1>
            <p>
              Hoy descubrirás todo un mundo sobre mí y mis habilidades como
              desarrolladora web. Compartiré contigo contenido de mis proyectos
              los cuales espero que disfrutes.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5} style={{ zIndex: "10" }}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
