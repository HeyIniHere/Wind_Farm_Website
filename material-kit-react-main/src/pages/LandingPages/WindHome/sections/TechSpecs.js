import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TechSpecs() {
  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        // Pick up from the blue of WindJustice and move toward the light green
        background: "linear-gradient(180deg, #62a0bc 0%, #94af65 100%)",
        position: "relative",
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* LEFT COLUMN: Text Content */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <MKTypography
              variant="h2"
              color="white"
              sx={{
                fontSize: "4.5rem",
                fontWeight: "900",
                lineHeight: 1,
                mb: 1,
                opacity: 0.7, // Lower opacity for the background heading
                textTransform: "uppercase",
              }}
            >
              Technical Specifications
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              sx={{
                fontSize: "3.5rem",
                fontWeight: "900",
                mb: 3,
              }}
            >
              Reference turbine
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "600px",
                ml: "auto", 
                mr: { xs: "auto", md: 0 },
              }}
            >
              As they get older, sea turtles find a place that&apos;s good for food and not too
              dangerous. These spots can be coral reefs, seagrass meadows, or open ocean. 
              They stick around these areas, munching on their favorite foods and growing bigger.
            </MKTypography>
          </Grid>

          {/* RIGHT COLUMN: The Turbine Icon */}
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <MKBox
              sx={{
                fontSize: "18rem", // Large scale for the turbine
                color: "#1A365D",
                display: "flex",
                justifyContent: "center",
                transform: "rotate(-15deg)", 
              }}
            >
              {/* Note: 'air' or 'wind_power' are good Material Icon substitutes for a turbine */}
              <Icon fontSize="inherit">air</Icon>
            </MKBox>
          </Grid>
        </Grid>
      </Container>

      {/* CONTINUING THE PATH LINE */}
      <MKBox
        component="svg"
        viewBox="0 0 100 100"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <path
          d="M 90,0 Q 50,50 10,100" // Path traveling from top-right to bottom-left
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.3"
          strokeDasharray="2,2"
        />
      </MKBox>
    </MKBox>
  );
}

export default TechSpecs;