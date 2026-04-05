import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import insiteLogo from "assets/images/insite_logo.png";

function InsiteLogoMark({ sx, ...props }) {
  return (
    <Box
      component="img"
      src={insiteLogo}
      alt=""
      sx={{
        height: { xs: 40, md: 44 },
        width: "auto",
        maxWidth: { xs: 200, md: 240 },
        objectFit: "contain",
        objectPosition: "left center",
        display: "block",
        flexShrink: 0,
        ...sx,
      }}
      {...props}
    />
  );
}

InsiteLogoMark.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default InsiteLogoMark;
