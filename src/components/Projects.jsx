import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { getApiGithub } from "../api/apiGithub";

export const Projects = () => {
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    getApiGithub().then((data) => {
      setGithubData(data);
    });
  }, []);

  console.log(githubData);

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
                  <Nav.Link eventKey="second">GitHub</Nav.Link>
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
                <Tab.Pane eventKey="second" className="card-container">
                  <h3>Información de GitHub</h3>

                  <div className="container-details-info-github">
                    <div className="container-photo-link">
                      <img
                        className="photo-github"
                        src={githubData.avatar_url}
                        alt="Avatar"
                      />
                      <a
                        href={githubData.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Perfil GitHub
                      </a>
                    </div>

                    <div className="container-info-github">
                      <p>
                        {" "}
                        <strong>Usuario: </strong> {githubData.name}
                      </p>
                      <p>
                        {" "}
                        <strong>Seguidores: </strong> {githubData.followers}
                      </p>
                      <p>
                        {" "}
                        <strong>No. Proyectos: </strong>{" "}
                        {githubData.public_repos}
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
