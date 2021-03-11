import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Fade from "../components/Common/Fade";

const Home = () => {
  return (
    <Fade>
      <Banner />
      <Features />
    </Fade>
  );
};

export default Home;
