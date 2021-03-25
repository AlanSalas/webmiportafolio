import React from "react";
import { Row, Col } from "antd";
import Title from "../assets/title.svg";
import Suitcase from "../assets/suitcase.svg";
import Free from "../assets/free.svg";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <Row>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="features__desc">
              <h2 className="features__desc-title">Por qué usar Webmiportafolio</h2>
              <p className="features__desc-copy">
                Es un medio para conocerte mejor profesionalmente, otra carta de presentación pero
                esta vez digital y con un diseño amigable. Además de poder compartir tu portafolio
                ¡con todo el mundo!
              </p>
            </div>
          </Col>
        </Row>
        <Row justify="space-between" gutter={[0, 32]}>
          <Col xs={24} md={24} lg={6} xl={6}>
            <div className="features__card">
              <img className="features__card-icon" src={Title} alt="title" />
              <h3 className="features__card-title">Date a conocer</h3>
              <p className="features__card-text">¡Comparte tu portafolio con un link amigable!</p>
            </div>
          </Col>
          <Col xs={24} md={24} lg={6} xl={6}>
            <div className="features__card">
              <img className="features__card-icon" src={Suitcase} alt="suitcase" />
              <h3 className="features__card-title">Comparte tu experiencia</h3>
              <p className="features__card-text">Comparte tu carrera profesional, proyectos</p>
            </div>
          </Col>
          <Col xs={24} md={24} lg={6} xl={6}>
            <div className="features__card">
              <img className="features__card-icon" src={Free} alt="free" />
              <h3 className="features__card-title">Gratis</h3>
              <p className="features__card-text">¡Completamente gratis!</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Features;
