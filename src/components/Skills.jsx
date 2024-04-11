import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import jsImg from "../assets/img/js.png";
import reactImg from "../assets/img/react.png";
import bootstapImg from "../assets/img/bootstrap.png";
import nodejsImg from "../assets/img/nodejs.png";
import pythonImg from "../assets/img/piton.png";
import mysqlImg from "../assets/img/mysql.png";
import figmaImg from "../assets/img/figma.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Trabajo con las mejores tecnologías de la industria que me
                <br></br>
                permiten crear proyectos de calidad y con las mejores prácticas
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={htmlImg} alt="html"></img>
                  <h5>HTML</h5>
                  <div class="ui-widgets"></div>
                </div>
                <div className="item">
                  <img src={cssImg} alt="css"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jsImg} alt="js"></img>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactImg} alt="React"></img>
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={bootstapImg} alt="Bootstrap"></img>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={nodejsImg} alt="NodeJS"></img>
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={pythonImg} alt="Python"></img>
                  <h5>Python </h5>
                </div>
                <div className="item">
                  <img src={mysqlImg} alt="Mysql"></img>
                  <h5>My sql</h5>
                </div>
                <div className="item">
                  <img src={figmaImg} alt="Figma"></img>
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
