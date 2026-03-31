import MKBox from "components/MKBox";
import Hero from "pages/LandingPages/WindHome/sections/Hero";
import WindJustice from "./sections/WindJustice";
import TechSpecs from "./sections/TechSpecs";
import OSWPlans from "./sections/OSWPlans";

function WindHomePage() {
  return (
    <MKBox component="main" bgColor="white" minHeight="100vh">
      <Hero />
      <WindJustice />
      <TechSpecs />
      <OSWPlans />
    </MKBox>
  );
}

export default WindHomePage;