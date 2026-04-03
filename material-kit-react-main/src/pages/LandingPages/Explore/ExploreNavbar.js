import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { exploreNavLinks as defaultNavLinks } from "./nav.routes";

const LINK_IDLE = "rgba(255, 255, 255, 0.95)";
const LINK_ACTIVE = "#7EC8E3";

function InsiteLogo() {
  return (
    <Box
      component="span"
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        bgcolor: "rgba(255, 255, 255, 0.2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        border: "1px solid rgba(255, 255, 255, 0.35)",
      }}
      aria-hidden
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="3" fill="white" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1="16"
            y1="16"
            x2={16 + 10 * Math.cos(((deg - 90) * Math.PI) / 180)}
            y2={16 + 10 * Math.sin(((deg - 90) * Math.PI) / 180)}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </Box>
  );
}

function navLinkEndProp(to) {
  if (to === "/") return true;
  if (to.startsWith("/pages/")) return true;
  return false;
}

function ExploreNavbar({ navLinks = defaultNavLinks }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const navItems = (
    <Box
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 0, md: 0.5 },
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 2, md: 0 },
      }}
    >
      {navLinks.map(({ label, to }) => (
        <Typography
          key={label}
          component={NavLink}
          to={to}
          end={navLinkEndProp(to)}
          onClick={() => setMobileOpen(false)}
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            letterSpacing: "0.02em",
            px: 1.25,
            py: 0.5,
            borderRadius: 1,
            transition: "color 0.2s",
            color: LINK_IDLE,
            "&:hover": { color: "#ffffff" },
            "&.active": { color: LINK_ACTIVE },
          }}
        >
          {label}
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          backgroundImage: "none",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, lg: 5 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 72 },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              component={NavLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <InsiteLogo />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  color: "#ffffff",
                  letterSpacing: "0.06em",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                INSITE LAB
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 1 } }}>
              {isMdUp && navItems}

              <IconButton size="medium" aria-label="search" sx={{ color: "#ffffff" }}>
                <SearchIcon />
              </IconButton>

              <IconButton
                size="medium"
                aria-label="open menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#ffffff",
                  display: { xs: "inline-flex", md: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            pt: 2,
            bgcolor: "rgba(15, 40, 70, 0.97)",
          },
        }}
      >
        {navItems}
      </Drawer>
    </>
  );
}

ExploreNavbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

export default ExploreNavbar;
