import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MKBox from "components/MKBox";
import ExploreNavbar from "pages/LandingPages/Explore/ExploreNavbar";
import Hero from "pages/LandingPages/WindHome/sections/Hero";
import { windHomeNavLinks } from "./nav.routes";
import WindJustice from "./sections/WindJustice";
import TechSpecs from "./sections/TechSpecs";
import OSWPlans from "./sections/OSWPlans";
import CommunityImpact from "./sections/CommunityImpact";
import Footer from "./sections/Footer";

function WindHomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <ExploreNavbar navLinks={windHomeNavLinks} variant="light" />
    <MKBox
      component="main"
      sx={{
        bgcolor: "#E6F0FF",
        width: "100%",
        overflowX: "hidden",
      }}
      minHeight="100vh"
    >
      <Hero />
      <WindJustice />
      <TechSpecs />
      <OSWPlans />
      <CommunityImpact />
      <Footer />
    </MKBox>
    </>
  );
}

export default WindHomePage;