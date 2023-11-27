import React from "react";
import Container from "../../Layouts/Container/Container";
import BannerSection from "../../Components/Home/BannerSection";
import Features from "../../Components/Home/Features";

const Home = () => {
  return (
    <>
      <BannerSection></BannerSection>
      <Container>
        <Features></Features>
      </Container>
    </>
  );
};

export default Home;
