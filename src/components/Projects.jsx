import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import certification1 from "../assets/Certificaciones/Aprende-SCRUM.jpg";
import certification2 from "../assets/Certificaciones/Tecnicas de resolucion de problemas.jpg";
import certification3 from "../assets/Certificaciones/Fundamentos de la gestion de proyectos.jpg";
import certification4 from "../assets/Certificaciones/Fundamentos de la negociacion.jpg";
import certification5 from "../assets/Certificaciones/Fundamentos del desarrollo web Full Stack o Frontend.jpg";
import certification6 from "../assets/Certificaciones/Liderazgo y trabajo en equipo.jpg";
import certification7 from "../assets/Certificaciones/DesarrolloWeb.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Visolutions",
      description: "Visolutions es una empresa de inteligencia artificial",
      imgUrl: projImg1,
    },
    {
      title: "English Colors",
      description: "Pagina enfocada a niños para aprender ingles",
      imgUrl: projImg2,
    },
    {
      title: "Best Food",
      description: "Maquetación de página sobre comida",
      imgUrl: projImg3,
    },
  ];

  const certifications = [
    {
      title: "Certificación",
      description: "SCRUM",
      imgUrl: certification1,
    },
    {
      title: "Certificación",
      description: "Tecnicas de resolucion de problemas",
      imgUrl: certification2,
    },
    {
      title: "Certificación",
      description: "Fundamentos de la gestion de proyectos",
      imgUrl: certification3,
    },
    {
      title: "Certificación",
      description: "Fundamentos de la negociacion",
      imgUrl: certification4,
    },
    {
      title: "Certificación ",
      description: "Funda mentos del desarrollo web Full Stack o Frontend",
      imgUrl: certification5,
    },
    {
      title: "Certificación",
      description: "Liderazgo y trabajo en equipo",
      imgUrl: certification6,
    },
    {
      title: "Certificación Google",
      description: "Desarrollo Web",
      imgUrl: certification7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> Proyectos </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificaciones</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="second"
                  className="container-certifications"
                >
                  <Row>
                    {certifications.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
