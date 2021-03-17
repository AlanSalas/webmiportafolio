import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import Fade from "../components/Common/Fade";
import { FolderOutlined, SolutionOutlined } from "@ant-design/icons";
import DashboardImg from "../assets/dashboard.svg";
import useAuth from "../hooks/useAuth";
import { countProjects } from "../api/project";
import { countExperiences } from "../api/experience";

const Dashboard = () => {
  const [totalProjects, setTotalProjects] = useState("");
  const [totalExperiences, setTotalExperiences] = useState("");
  const { isAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const getTotals = async () => {
      try {
        const token = localStorage.getItem("token");
        const projects = await countProjects(token);
        const experiences = await countExperiences(token);
        setTotalProjects(projects.data.total);
        setTotalExperiences(experiences.data.total);
      } catch (err) {
        history.push("/error/500");
      }
    };
    getTotals();
  }, [history]);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Fade>
      <div className="dashboard">
        <div className="container">
          <Row gutter={[20, 20]} style={{ marginBottom: "3rem" }}>
            <Col xs={24} md={12} lg={{ span: 8, offset: 4 }} xl={{ span: 8, offset: 4 }}>
              <div className="dashboard__card">
                <Statistic
                  title="Experiencias"
                  valueStyle={{ marginBottom: "1rem" }}
                  value={totalExperiences}
                  prefix={<SolutionOutlined />}
                />
                <Link to="/experiencias" className="button black">
                  Ver experencias
                </Link>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} xl={8}>
              <div className="dashboard__card">
                <Statistic
                  title="Proyectos"
                  valueStyle={{ marginBottom: "1rem" }}
                  value={totalProjects}
                  prefix={<FolderOutlined />}
                />
                <Link to="/proyectos" className="button black">
                  Ver proyectos
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              md={{ span: 18, offset: 2 }}
              lg={{ span: 16, offset: 4 }}
              xl={{ span: 16, offset: 4 }}
            >
              <img className="dashboard__img" src={DashboardImg} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </Fade>
  );
};

export default Dashboard;
