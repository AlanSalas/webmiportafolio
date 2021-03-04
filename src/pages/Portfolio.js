import React from "react";
import { Row, Col, Divider } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import WireframeImg from "../assets/wireframe.png";
import UserInfo from "../components/UserInfo";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <UserInfo />
        <Row style={{ marginBottom: "3rem" }}>
          <Divider orientation="left">Acerca de mí</Divider>
          <Col>
            <p className="portfolio__about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue augue, aliquam
              a tellus sit amet, porta pulvinar dolor. Pellentesque vulputate id purus a blandit. Ut
              ultricies lectus eu fringilla euismod. Ut commodo, diam vel lobortis dapibus, justo
              tortor euismod lorem, sed semper leo sapien et dui. Etiam nec bibendum turpis. Aenean
              ante leo, tempus at orci sed, mattis iaculis odio. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Phasellus at diam eu quam
              vehicula dapibus eget at dolor. Vestibulum eget dictum diam, sed venenatis lectus.
              Nulla euismod sagittis felis. Donec laoreet sem erat, vitae interdum elit efficitur
              sit amet. Cras rutrum porta arcu et sollicitudin.
            </p>
          </Col>
        </Row>
        <Row gutter={[0, 20]} style={{ marginBottom: "3rem" }}>
          <Divider orientation="left">Experiencia</Divider>
          <Col xs={24} md={24} lg={24} xl={24}>
            <div className="portfolio__experience-card">
              <span className="portfolio__experience-card-date">01-2019 a 07-2019</span>
              <h2 className="portfolio__experience-card-company">Nombre de la empresa</h2>
              <h3 className="portfolio__experience-card-position">Nombre del puesto</h3>
              <p className="portfolio__experience-card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue augue,
                aliquam a tellus sit amet, porta pulvinar dolor. Pellentesque vulputate id purus a
                blandit. Ut ultricies lectus eu fringilla euismod. Ut commodo, diam vel lobortis
                dapibus, justo tortor euismod lorem, sed semper leo sapien et dui. Etiam nec
                bibendum turpis.
              </p>
            </div>
          </Col>
          <Col xs={24} md={24} lg={24} xl={24}>
            <div className="portfolio__experience-card">
              <span className="portfolio__experience-card-date">01-2019 a 07-2019</span>
              <h2 className="portfolio__experience-card-company">Nombre de la empresa</h2>
              <h3 className="portfolio__experience-card-position">Nombre del puesto</h3>
              <p className="portfolio__experience-card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue augue,
                aliquam a tellus sit amet, porta pulvinar dolor. Pellentesque vulputate id purus a
                blandit. Ut ultricies lectus eu fringilla euismod. Ut commodo, diam vel lobortis
                dapibus, justo tortor euismod lorem, sed semper leo sapien et dui. Etiam nec
                bibendum turpis. Aenean ante leo, tempus at orci sed, mattis iaculis odio.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Phasellus at diam eu quam vehicula dapibus eget at dolor. Vestibulum eget
                dictum diam, sed venenatis lectus. Nulla euismod sagittis felis. Donec laoreet sem
                erat, vitae interdum elit efficitur sit amet. Cras rutrum porta arcu et
                sollicitudin.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Divider orientation="left">Proyectos</Divider>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <div className="portfolio__project-card">
              <img className="portfolio__project-card-img" src={WireframeImg} alt="" />
              <div className="portfolio__project-card-detail">
                <h2>Details</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero ullam veniam
                  dignissimos, fuga quam odio inventore iusto aliquam obcaecati recusandae, incidunt
                  commodi rem voluptate quis eaque alias, possimus quas. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Mollitia officia eos ea eaque eum commodi voluptate
                  rem iure veniam adipisci, quis libero earum iusto aperiam, aspernatur, enim maxime
                  minus nulla.
                </p>
                <a href="#">
                  See project <LinkOutlined />
                </a>
              </div>
              <div className="portfolio__project-card-footer">
                <h2 className="portfolio__project-card-title">Nombre del proyecto</h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
