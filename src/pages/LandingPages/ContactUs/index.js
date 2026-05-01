import Container from "@mui/material/Container";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ExploreNavbar from "pages/LandingPages/Explore/ExploreNavbar";
import { exploreNavLinks } from "pages/LandingPages/Explore/nav.routes";
import Footer from "pages/LandingPages/WindHome/sections/Footer";

function ContactUsPage() {
  return (
    <>
      <ExploreNavbar navLinks={exploreNavLinks} variant="light" />
      <MKBox
        component="main"
        sx={{
          bgcolor: "#E6F0FF",
          width: "100%",
          overflowX: "hidden",
          minHeight: "65vh",
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
          <MKTypography
            variant="h3"
            sx={{
              color: "#002D62",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            }}
          >
            Contact us
          </MKTypography>
          <MKTypography
            variant="body1"
            sx={{
              color: "rgba(0, 45, 98, 0.88)",
              lineHeight: 1.7,
              maxWidth: 560,
              mb: 2,
            }}
          >
            Reach out to the INSITE Lab team with questions about our research, partnerships, or this site.
          </MKTypography>
          <MKTypography
            component="a"
            variant="body1"
            href="mailto:insite-lab@colby.edu"
            sx={{
              color: "#0B4F9C",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            insite-lab@colby.edu
          </MKTypography>
        </Container>
      </MKBox>
      <Footer />
    </>
  );
}

export default ContactUsPage;
