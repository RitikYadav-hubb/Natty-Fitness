import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import CurvedText from "../components/curvedText";
import Testimonials from "../components/testominal";
import UpcomingChallenges from "../components/upcomingChallengse";
import FooterCTA from "../components/footerCTA";
import Footer from "../components/footer";
import Protein from "../components/protein";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CurvedText />
      <Protein />
      <Testimonials />
      {/* <UpcomingChallenges /> */}
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Home;
