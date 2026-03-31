import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function WindJustice() {
  return (
    <MKBox
      component="section"
      minHeight="100vh"
      py={12}
      sx={{
        // Continuing the gradient from the Hero section
        background: "linear-gradient(180deg, #C2E9FB 20%, #62a0bc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* LEFT COLUMN: The Icon */}
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <MKBox
              sx={{
                fontSize: "15rem", // Large icon size
                color: "#1A365D",   // Dark blue from mockup
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon fontSize="inherit">balance</Icon> 
            </MKBox>
          </Grid>

          {/* RIGHT COLUMN: The Text */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <MKTypography
              variant="h2"
              color="white"
              sx={{
                fontSize: "4.5rem",
                fontWeight: "900",
                lineHeight: 1,
                mb: 1,
                opacity: 0.8,
              }}
            >
              Wind Energy Justice
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
              Social need
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "500px",
                ml: { xs: "auto", md: 0 },
                mr: "auto",
              }}
            >
              When sea turtles hatch, their first big challenge is to get to the 
              ocean from the beach. It&apos;s a race against time and predators. 
              Once they hit the water, they start what&apos;s often called the &apos;lost years&apos; 
              because they drift far out to sea and aren&apos;t easy to track.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      
      {/* THE PATH LINE: A simple SVG overlay */}
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
          zIndex: 0,
        }}
      >
        <path
          d="M 10,90 Q 50,80 90,95" // A soft curve representing the path
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.5"
          strokeDasharray="2,2" // This makes it a dotted line
        />
      </MKBox>
    </MKBox>
  );
}

export default WindJustice;