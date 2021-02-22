import React from "react";
import { Layout } from "antd";
import LoadRoute from "../components/Common/LoadRoute";
const { Header, Content, Footer } = Layout;

const DefaultLayout = ({ routes }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <LoadRoute routes={routes} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DefaultLayout;
