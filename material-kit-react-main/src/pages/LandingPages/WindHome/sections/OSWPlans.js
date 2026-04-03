import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function OSWPlans() {
  return (
    <MKBox
      id="team"
      component="section"
      py={12}
      sx={{
        // Continuing the gradient across the screen
        background: "linear-gradient(180deg, #94af65 0%, #768f4d 100%)",
        position: "relative",
        scrollMarginTop: "88px",
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* LEFT COLUMN: The Checklist Icon */}
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <MKBox
              sx={{
                fontSize: "15rem",
                color: "#1A365D",
                display: "flex",
                justifyContent: "center",
                // Added a slight drop shadow to help with visual depth
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.1))", 
              }}
            >
              <Icon fontSize="inherit">list_alt</Icon>
            </MKBox>
          </Grid>

          {/* RIGHT COLUMN: Text and Button */}
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <MKTypography
              variant="h2"
              color="white"
              sx={{
                fontSize: "4.5rem",
                fontWeight: "900",
                lineHeight: 1,
                mb: 1,
                opacity: 0.7,
              }}
            >
              Current OSW
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
              Plans
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.9}
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "500px",
                mb: 4,
                ml: { xs: "auto", md: 0 },
                mr: "auto",
              }}
            >
              Don&apos;t wait until the turtles hatch. Look at the current plans for 
              sustainable energy in the Gulf of Maine. From deep-water floating 
              foundations to coastal grid connections, every step of the roadmap 
              has been carefully mapped out.
            </MKTypography>
            
            {/* Learn More Button */}
            <MKButton 
              variant="contained" 
              color="success" 
              size="large"
              sx={{ 
                borderRadius: "30px", 
                px: 5,
                backgroundColor: "#00f59b !important", 
                color: "#1A365D",
                fontWeight: "bold"
              }}
            >
              Learn More
            </MKButton>
          </Grid>
        </Grid>
      </Container>

      {/* THE PATH LINE CONTINUED */}
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
          d="M 10,0 Q 50,20 90,100" // Path moving from left back to the right
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.3"
          strokeDasharray="2,2"
        />
      </MKBox>
    </MKBox>
  );
}

export default OSWPlans;