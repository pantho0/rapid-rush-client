import React from "react";
import Container from "../../Layouts/Container/Container";
import BannerSection from "../../Components/Home/BannerSection";
import Features from "../../Components/Home/Features";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RapidRush | HOME</title>
      </Helmet>
      <BannerSection></BannerSection>
      <Container>
        <Features></Features>
      </Container>
    </>
  );
};

export default Home;
