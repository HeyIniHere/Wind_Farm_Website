import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const ICON_BLUE = "#1A365D";

/** Stylized hands cupping a globe — matches other section icon weight */
function HandsGlobeIcon() {
  return (
    <MKBox
      component="svg"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      aria-hidden
      sx={{
        width: "100%",
        maxWidth: { xs: "14rem", sm: "18rem", md: "22rem" },
        height: "auto",
        color: ICON_BLUE,
        filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.12))",
      }}
    >
      {/* Globe */}
      <circle cx="120" cy="108" r="52" fill="none" stroke="currentColor" strokeWidth="5" />
      <ellipse cx="120" cy="108" rx="52" ry="20" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.85" />
      <line x1="120" y1="56" x2="120" y2="160" stroke="currentColor" strokeWidth="3" opacity="0.85" />
      <line x1="68" y1="108" x2="172" y2="108" stroke="currentColor" strokeWidth="3" opacity="0.85" />
      {/* Left hand */}
      <path
        fill="currentColor"
        d="M38 150 Q28 175 42 198 Q58 218 88 212 Q102 188 96 168 Q82 148 62 142 Q48 138 38 150Z"
        opacity="0.95"
      />
      <rect x="32" y="198" width="28" height="14" rx="2" fill="currentColor" />
      {/* Right hand */}
      <path
        fill="currentColor"
        d="M202 150 Q212 175 198 198 Q182 218 152 212 Q138 188 144 168 Q158 148 178 142 Q192 138 202 150Z"
        opacity="0.95"
      />
      <rect x="180" y="198" width="28" height="14" rx="2" fill="currentColor" />
    </MKBox>
  );
}

function CommunityImpact() {
  return (
    <MKBox
      id="community-impact"
      component="section"
      py={12}
      sx={{
        position: "relative",
        overflow: "hidden",
        // Picks up OSWPlans bottom (#768f4d) → light lime mid → deeper olive at bottom
        background: "linear-gradient(180deg, #768f4d 0%, #b8d68a 38%, #c8e6a0 52%, #4d5c32 100%)",
        scrollMarginTop: "88px",
      }}
    >
      {/* Faint dashed waves — top & bottom */}
      <MKBox
        component="svg"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: 48, md: 64 },
          pointerEvents: "none",
        }}
      >
        <path
          d="M0 45 Q200 20 400 42 T800 38 T1200 48"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="2"
          strokeDasharray="10 8"
          vectorEffect="non-scaling-stroke"
        />
      </MKBox>
      <MKBox
        component="svg"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: 48, md: 64 },
          pointerEvents: "none",
        }}
      >
        <path
          d="M0 28 Q250 55 500 32 T1000 40 T1200 25"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="2"
          strokeDasharray="10 8"
          vectorEffect="non-scaling-stroke"
        />
      </MKBox>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <MKTypography
              variant="h2"
              sx={{
                fontSize: { xs: "2.75rem", md: "4.25rem" },
                fontWeight: 900,
                lineHeight: 1.05,
                mb: 1.5,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Community Impact
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                mb: 3,
              }}
            >
              Local and State
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                maxWidth: { md: "38rem" },
                opacity: 0.95,
                mx: { xs: "auto", md: 0 },
              }}
            >
              When it&apos;s time to lay eggs, female sea turtles take a long trip back to where they were born.
              It&apos;s a big circle-of-life moment. They lay their eggs on the beach, cover them up, and then head
              back to their feeding grounds.
            </MKTypography>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HandsGlobeIcon />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CommunityImpact;
