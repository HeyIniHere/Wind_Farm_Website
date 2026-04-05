import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import ExploreNavbar from "pages/LandingPages/Explore/ExploreNavbar";
import { exploreNavLinks } from "pages/LandingPages/Explore/nav.routes";

import teamHeroBg from "./teamHeroBg";
import { teamMembers } from "./teamData";

const NAME_COLOR = "#0B4F9C";

function TeamMemberCard({ name, role, photo }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MKBox sx={{ textAlign: "center", px: { xs: 1, sm: 2 } }}>
        <MKBox
          sx={{
            width: { xs: 140, sm: 168 },
            height: { xs: 140, sm: 168 },
            borderRadius: "50%",
            mx: "auto",
            mb: 2.5,
            flexShrink: 0,
            ...(photo
              ? {
                  backgroundImage: `url(${photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  border: `3px solid ${NAME_COLOR}`,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }
              : {
                  background:
                    "linear-gradient(155deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.12) 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(4px)",
                }),
          }}
          role="img"
          aria-label={photo ? name : `${name} (photo coming soon)`}
        />
        <MKTypography
          variant="h5"
          sx={{
            color: NAME_COLOR,
            fontWeight: 800,
            fontSize: { xs: "1.15rem", sm: "1.35rem" },
            mb: 0.75,
            textShadow: "0 1px 2px rgba(255, 255, 255, 0.35)",
          }}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.98)",
            fontWeight: 500,
            fontSize: "1rem",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.35)",
          }}
        >
          {role}
        </MKTypography>
      </MKBox>
    </Grid>
  );
}

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

function TeamPage() {
  return (
    <>
      <ExploreNavbar navLinks={exploreNavLinks} />
      <MKBox
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url(${teamHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          px: 2,
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <MKBox
          sx={{
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
}

export default TeamPage;
