import { useMemo, useState } from "react";
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

import InsiteLogoMark from "components/InsiteLogoMark";

import { exploreNavLinks as defaultNavLinks } from "./nav.routes";

const BRAND = "#002D62";
const LINK_LIGHT = "#4A90E2";

const DARK_LINK_IDLE = "rgba(255, 255, 255, 0.95)";
const DARK_LINK_ACTIVE = "#7EC8E3";

function navLinkEndProp(to) {
  if (to === "/") return true;
  if (to.startsWith("/pages/")) return true;
  return false;
}

function ExploreNavbar({
  navLinks = defaultNavLinks,
  showMobileMenu = true,
  variant = "dark",
}) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLight = variant === "light";

  const navLinkSx = useMemo(
    () =>
      isLight
        ? {
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            letterSpacing: "0.02em",
            px: 1.25,
            py: 0.5,
            borderRadius: 1,
            transition: "opacity 0.2s",
            color: LINK_LIGHT,
            flexShrink: 0,
            "&:hover": { opacity: 0.85 },
            "&.active": { color: BRAND, fontWeight: 600 },
          }
        : {
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            letterSpacing: "0.02em",
            px: 1.25,
            py: 0.5,
            borderRadius: 1,
            transition: "color 0.2s",
            color: DARK_LINK_IDLE,
            flexShrink: 0,
            "&:hover": { color: "#ffffff" },
            "&.active": { color: DARK_LINK_ACTIVE },
          },
    [isLight]
  );

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const renderLinks = () =>
    navLinks.map(({ label, to }) => (
      <Typography
        key={label}
        component={NavLink}
        to={to}
        end={navLinkEndProp(to)}
        onClick={() => setMobileOpen(false)}
        sx={navLinkSx}
      >
        {label}
      </Typography>
    ));

  const toolbarNavRow = (
    <Box
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        flexWrap: "nowrap",
      }}
    >
      {renderLinks()}
    </Box>
  );

  const drawerNav = (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        py: 2,
        gap: 0,
      }}
    >
      {renderLinks()}
    </Box>
  );

  const showHamburger = showMobileMenu && !isMdUp;
  const showMobileInlineNav = !showMobileMenu && !isMdUp;

  const hamburgerColor = isLight ? LINK_LIGHT : "#ffffff";

  const logoSx = {
    height: { xs: 38, md: 42 },
    maxWidth: { xs: 200, md: 240 },
  };

  const drawerPaperSx = isLight
    ? { width: 280, pt: 2, bgcolor: "#E6F0FF" }
    : { width: 280, pt: 2, bgcolor: "rgba(15, 40, 70, 0.97)" };

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
                flexShrink: 0,
              }}
            >
              <InsiteLogoMark sx={logoSx} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, md: 1 },
                flex: 1,
                minWidth: 0,
                justifyContent: "flex-end",
              }}
            >
              {isMdUp && toolbarNavRow}

              {showMobileInlineNav && (
                <Box
                  sx={{
                    overflowX: "auto",
                    maxWidth: "100%",
                    WebkitOverflowScrolling: "touch",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                  }}
                >
                  {toolbarNavRow}
                </Box>
              )}

              {showHamburger && (
                <IconButton
                  size="medium"
                  aria-label="open menu"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: hamburgerColor,
                    flexShrink: 0,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {showMobileMenu && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: drawerPaperSx,
          }}
        >
          {drawerNav}
        </Drawer>
      )}
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
  showMobileMenu: PropTypes.bool,
  variant: PropTypes.oneOf(["dark", "light"]),
};

export default ExploreNavbar;
