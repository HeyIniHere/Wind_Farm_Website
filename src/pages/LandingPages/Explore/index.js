import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ExploreNavbar from "./ExploreNavbar";
import exploreHeroBg from "./exploreHeroBg";

function ExplorePage() {
  return (
    <>
      <ExploreNavbar />
      <MKBox
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#0a1628",
          backgroundImage: `
            linear-gradient(180deg, rgba(8, 28, 48, 0.35) 0%, rgba(10, 30, 55, 0.45) 100%),
            url(${exploreHeroBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          pt: { xs: 10, md: 11 },
        }}
      >
        <MKBox
          sx={{
            maxWidth: 720,
            width: "100%",
            py: { xs: 4, sm: 5 },
            px: { xs: 3, sm: 6 },
            borderRadius: 6,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.14)",
            border: "1px solid rgba(255, 255, 255, 0.28)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          <MKTypography
            variant="h3"
            sx={{
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.25,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem" },
            }}
          >
            Use arrow keys to move around
          </MKTypography>
        </MKBox>
      </MKBox>
    </>
  );
}

export default ExplorePage;
