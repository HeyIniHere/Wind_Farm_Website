import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { windHomeNavLinks } from "./nav.routes";

const BRAND = "#002D62";
const LINK = "#4A90E2";

function InsiteLogo() {
  return (
    <Box
      component="span"
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        bgcolor: BRAND,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
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

function WindHomeNavbar() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreAnchor, setMoreAnchor] = useState(null);

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const openMoreMenu = (event) => setMoreAnchor(event.currentTarget);
  const closeMoreMenu = () => setMoreAnchor(null);

  const linkSx = {
    color: LINK,
    fontWeight: 500,
    fontSize: "0.95rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
    px: 1.25,
    py: 0.5,
    borderRadius: 1,
    transition: "opacity 0.2s",
    "&:hover": { opacity: 0.85 },
  };

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
      {windHomeNavLinks.map(({ label, to }) => (
        <Typography
          key={label}
          component={RouterLink}
          to={to}
          onClick={() => setMobileOpen(false)}
          sx={linkSx}
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
              component={RouterLink}
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
                  color: BRAND,
                  letterSpacing: "0.06em",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                INSITE LAB
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 1 } }}>
              {isMdUp && navItems}

              <IconButton
                size="medium"
                aria-label="search"
                sx={{ color: LINK }}
              >
                <SearchIcon />
              </IconButton>

              <IconButton
                size="medium"
                aria-label="open menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: LINK,
                  display: { xs: "inline-flex", md: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>

              <IconButton
                size="medium"
                aria-label="site menu"
                onClick={openMoreMenu}
                sx={{
                  color: LINK,
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={moreAnchor}
        open={Boolean(moreAnchor)}
        onClose={closeMoreMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ sx: { mt: 1, minWidth: 200, bgcolor: "#E6F0FF" } }}
      >
        {windHomeNavLinks.map(({ label, to }) => (
          <MenuItem
            key={label}
            component={RouterLink}
            to={to}
            onClick={closeMoreMenu}
            sx={{ color: LINK, typography: "body2", fontWeight: 500 }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            pt: 2,
            bgcolor: "#E6F0FF",
          },
        }}
      >
        {navItems}
      </Drawer>
    </>
  );
}

export default WindHomeNavbar;
