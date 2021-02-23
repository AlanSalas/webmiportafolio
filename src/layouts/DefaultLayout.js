import React from "react";
import { Layout, Row, Col } from "antd";
import LoadRoute from "../components/Common/LoadRoute";
import Navbar from "../components/Navbar";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ routes }) => {
  return (
    <Layout>
      <Header className="header">
        <Navbar />
      </Header>
      <Content className="content">
        <LoadRoute routes={routes} />
      </Content>
      <Footer className="footer">
        <div className="container">
          <Row gutter={[0, 16]}>
            <Col xs={24} md={12} lg={12} xl={12}>
              <h4>Webmiportafolio.com</h4>
              <p>Todos los derechos reservados 2021. Diseño y desarrollo.</p>
            </Col>
            <Col xs={24} md={12} lg={12} xl={12} style={{ textAlign: "right" }}>
              <p>Web por: Alan Salas</p>
            </Col>
          </Row>
        </div>
      </Footer>
    </Layout>
  );
};

export default DefaultLayout;
