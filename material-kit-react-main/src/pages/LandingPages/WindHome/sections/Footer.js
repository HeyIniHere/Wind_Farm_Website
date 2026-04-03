import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const WHITE = "rgba(255,255,255,0.95)";
const LINK_HOVER = "rgba(255,255,255,0.85)";

/** Simplified Colby seal: blue roundel + starburst (placeholder until asset is added) */
function ColbySeal() {
  return (
    <MKBox
      sx={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        bgcolor: "#003d6b",
        border: "3px solid rgba(255,255,255,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
      }}
      aria-hidden
    >
      <MKBox
        component="svg"
        viewBox="0 0 40 40"
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="3.5" fill="white" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1="20"
            y1="20"
            x2={20 + 11 * Math.cos(((deg - 90) * Math.PI) / 180)}
            y2={20 + 11 * Math.sin(((deg - 90) * Math.PI) / 180)}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </MKBox>
    </MKBox>
  );
}

const linkColumn = (title, items) => (
  <Stack spacing={1.5}>
    <MKTypography
      variant="h6"
      sx={{
        color: WHITE,
        fontWeight: 800,
        fontSize: "1rem",
        letterSpacing: "0.04em",
        mb: 0.5,
      }}
    >
      {title}
    </MKTypography>
    {items.map(({ label, to, href }) => (
      <MuiLink
        key={`${title}-${label}`}
        component={href ? "a" : RouterLink}
        href={href}
        to={to || "#"}
        underline="hover"
        sx={{
          color: LINK_HOVER,
          fontSize: "0.9rem",
          fontWeight: 400,
          "&:hover": { color: "#fff" },
        }}
      >
        {label}
      </MuiLink>
    ))}
  </Stack>
);

function Footer() {
  return (
    <MKBox
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        // Continues from Community Impact bottom (#4d5c32) → forest → teal
        background: "linear-gradient(180deg, #4d5c32 0%, #3a5340 28%, #2d5e55 62%, #1a4542 100%)",
        pt: { xs: 8, md: 10 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }} maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <ColbySeal />
                <MKTypography
                  sx={{
                    color: WHITE,
                    fontWeight: 800,
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    letterSpacing: "0.12em",
                    lineHeight: 1.2,
                  }}
                >
                  INSITE LAB
                </MKTypography>
              </Stack>
              <MKTypography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.65,
                  fontSize: "0.9rem",
                  maxWidth: 280,
                }}
              >
                Unraveling the mysteries of marine life, where we break down the incredible journeys of sea
                creatures.
              </MKTypography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {linkColumn("Company", [
              { label: "About Us", to: "/#about" },
              { label: "Careers", to: "#careers" },
              { label: "Contact", to: "#contact" },
            ])}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {linkColumn("Resources", [
              { label: "Newsletter", to: "#newsletter" },
              { label: "E-book", to: "#ebook" },
            ])}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {linkColumn("Legal", [
              { label: "Press", to: "#press" },
              { label: "Privacy", to: "#privacy" },
              { label: "Contact", to: "#contact-legal" },
            ])}
          </Grid>
        </Grid>

        <MKBox
          sx={{
            mt: { xs: 5, md: 6 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MKBox
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              px: { xs: 3, sm: 4 },
              py: 1.25,
              borderRadius: "999px",
              bgcolor: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            <MKBox
              component="svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{ opacity: 0.95, flexShrink: 0 }}
              aria-hidden
            >
              <path
                d="M12 2L14 8h6l-5 4 2 6-5-3-5 3 2-6L4 8h6l2-6z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinejoin="round"
                fill="rgba(255,255,255,0.15)"
              />
            </MKBox>
            <MKTypography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.92)",
                fontSize: "0.8rem",
                letterSpacing: "0.02em",
              }}
            >
              Website created by Colby INSITE Lab
            </MKTypography>
          </MKBox>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Footer;
