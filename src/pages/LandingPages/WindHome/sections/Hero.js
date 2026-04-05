// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function Hero() {
    return (
        <MKBox
            component="header"
            position="relative"
            minHeight="100vh"
            width="100%"
            sx={{
                //Implementing a blue gradient that starts of the color scheme for th efull page
                background: "linear-gradient(180deg, #A1C4FD 0%, #C2E9FB 50%)",
                display: "grid",
                placeItems: "center",
                pt: { xs: 10, md: 11 },
            }}
        >
            <Container>
                <Grid container item xs={12} lg={12} justifyContent="center" mx="auto" textAlign="center">
                    <MKTypography variant="h4" sx={{ fontWeight: "bold", textTransform: "uppercase", color:"#042953", mb: 2, opacity: 0.7}}
                    >
                      Welcome to <br />
                    </MKTypography>
                    <MKTypography
                        variant="h1"
                        sx={({ breakpoints }) => ({
                        fontSize: "5.5rem", // I made this slightly smaller to fit the longer text string
                        fontWeight: "900",
                        lineHeight: 0.9,
                        mb: 3,
                        // GRADIENT TEXT IMPLEMENTATION:
                        backgroundImage: "linear-gradient(180deg, #ffffff 30%,rgb(8, 86, 158) 100%)",
                        WebkitBackgroundClip: "text", // cuts the background image gradient into the shape of the letters
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                        textShadow: "0px 4px 15px rgba(0,0,0,0.05)",
                        [breakpoints.down("md")]: {
                            fontSize: "3rem",
                        },
                        })}
                    >
                        VIRTUAL OFFSHORE <br /> WIND FARM IN THE GULF OF MAINE
                    </MKTypography>
                    <MKTypography
                        variant="body1"
                        px={6}
                        mb={4}
                        sx={{
                            color: "rgb(144, 228, 247)",
                            fontWeight: 500,
                            lineHeight: 1.65,
                        }}
                    >
                        A digital assistive virtual reality project to increase
                        understanding of floating wind technology.
                    </MKTypography>
                    <MKButton
                        component={RouterLink}
                        to="/pages/landing-pages/explore"
                        color="info"
                        size="large"
                        circular
                        sx={{ px: 4 }}
                    >
                        Explore the Turbines!
                    </MKButton>
                </Grid>
            </Container>
        </MKBox>

    );
}

export default Hero;