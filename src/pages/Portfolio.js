import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Fade from "../components/Common/Fade";
import UserInfo from "../components/UserInfo";
import { Row, Col, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { getUserByUsername } from "../api/user";
import { getExperiences } from "../api/experience";
import { getProjects } from "../api/project";

const Portfolio = ({ reload, setReload }) => {
  const { username } = useParams();
  const [about, setAbout] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getUserByUsername(username);
        if (response.status !== 200) {
          setError(true);
          return;
        }

        const user = response.data.user;
        setAbout(user.about);
        const responseExp = await getExperiences(user.id);
        const experiences = responseExp.data.experiences;
        setExperiences(experiences.length > 0 ? experiences : null);
        const responseProjects = await getProjects(user.id);
        const projects = responseProjects.data.projects;
        setProjects(projects.length > 0 ? projects : null);
      } catch (err) {
        setError(true);
      }
    };

    getUser();
  }, [username]);

  if (error) return <Redirect to="/error/404" />;

  return (
    <Fade>
      <div className="portfolio">
        <div className="container">
          <UserInfo username={username} reload={reload} setReload={setReload} />
          <Row gutter={[20, 20]} style={{ marginBottom: "3rem" }}>
            <Divider orientation="left">Acerca de mí</Divider>
            <Col style={{ width: "100%" }}>
              {about ? (
                <p className="portfolio__about">{about}</p>
              ) : (
                <div className="portfolio__empty">
                  <h4>Sin Descripción 😟</h4>
                </div>
              )}
            </Col>
          </Row>
          <Row gutter={[20, 20]} style={{ marginBottom: "3rem" }}>
            <Divider orientation="left">Experiencia</Divider>
            {experiences ? (
              experiences.map(experience => (
                <Col key={experience._id} xs={24} md={24} lg={24} xl={24}>
                  <div className="portfolio__experience-card">
                    <span className="portfolio__experience-card-date">
                      {experience.startDate} a {experience.finishDate}
                    </span>
                    <h2 className="portfolio__experience-card-company">{experience.company}</h2>
                    <h3 className="portfolio__experience-card-position">{experience.position}</h3>
                    <p className="portfolio__experience-card-desc">{experience.description}</p>
                  </div>
                </Col>
              ))
            ) : (
              <div className="portfolio__empty">
                <h4>Sin Experiencias 😟</h4>
              </div>
            )}
          </Row>
          <Row gutter={[20, 20]}>
            <Divider orientation="left">Proyectos</Divider>
            {projects ? (
              projects.map(project => (
                <Col key={project._id} xs={24} md={12} lg={8} xl={8}>
                  <div className="portfolio__project-card">
                    <img
                      className="portfolio__project-card-img"
                      src={`http://localhost:9292/api/image/projects/${project.image}`}
                      alt={`${project.name}`}
                    />
                    <div className="portfolio__project-card-detail">
                      <h2>Detalles del proyecto</h2>
                      <p>{project.description}</p>
                      <a href={project.url} target="blank">
                        Ver proyecto <LinkOutlined />
                      </a>
                    </div>
                    <div className="portfolio__project-card-footer">
                      <h2 className="portfolio__project-card-title">{project.name}</h2>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <div className="portfolio__empty">
                <h4>Sin Proyectos 😟</h4>
              </div>
            )}
          </Row>
        </div>
      </div>
    </Fade>
  );
};

export default Portfolio;
