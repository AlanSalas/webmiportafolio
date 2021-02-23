import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";
import LoadRoute from "../components/Common/LoadRoute";
import Navbar from "../components/Navbar";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ routes }) => {
  const location = useLocation();

  return (
    <Layout>
      <Header className="header">
        <Navbar />
      </Header>
      <Content className="content">
        <LoadRoute routes={routes} />
      </Content>
      {location.pathname === "/" ? (
        <Footer className="footer">
          <div className="container">
            <Row gutter={[0, 16]}>
              <Col xs={24} md={12} lg={12} xl={12}>
                <h4>Webmiportafolio.com</h4>
                <p>Todos los derechos reservados 2021. Diseño y desarrollo.</p>
              </Col>
              <Col xs={24} md={12} lg={12} xl={12} style={{ textAlign: "right" }}>
                <p>
                  Creado con <HeartFilled /> por: Alan Salas
                </p>
              </Col>
            </Row>
          </div>
        </Footer>
      ) : null}
    </Layout>
  );
};

export default DefaultLayout;
