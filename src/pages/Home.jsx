import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { 
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  useTheme,
  useMediaQuery,
  Grid,
  Avatar,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Phone, Email, Language, ArrowRight } from "@mui/icons-material";
import Footer from "../components/Footer";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const carouselItems = [
    { img: slideImg1, alt: "Development workspace" },
    { img: slideImg2, alt: "Coding session" },
    { img: slideImg3, alt: "Project collaboration" },
  ];

  const infoItems = [
    { 
      icon: <ArrowRight color="primary" sx={{ mr: 1 }} />, 
      text: "Profession:", 
      value: "Bsc Information Technology" 
    },
    { 
      icon: <ArrowRight color="primary" sx={{ mr: 1 }} />, 
      text: "Specialization:", 
      value: "Software Development" 
    },
    { 
      icon: <Phone color="primary" sx={{ mr: 1 }} />, 
      text: "+254 794544826", 
      value: "", 
      link: "tel:+254794544826" 
    },
    { 
      icon: <Email color="primary" sx={{ mr: 1 }} />, 
      text: "bonfebdevs@gmail.com", 
      value: "", 
      link: "mailto:bonfebdevs@gmail.com" 
    },
    { 
      icon: <Language color="primary" sx={{ mr: 1 }} />, 
      text: "https://bonfebportfolio.netlify.app/", 
      value: "", 
      link: "https://bonfebportfolio.netlify.app/",
      external: true 
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: darkMode ? theme.palette.grey[900] : theme.palette.grey[50],
        color: darkMode ? theme.palette.common.white : theme.palette.common.black,
      }}
    >
      {/* Main Content - Reduced padding */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: 2, // Reduced from py: 4
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Grid 
          container 
          spacing={3} // Reduced from spacing={4}
          alignItems="center" 
          justifyContent="center"
          sx={{ my: 0 }} // Remove default margin
        >
          {/* Left: Image Carousel */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Carousel
                animation="fade"
                interval={4000}
                navButtonsAlwaysVisible={!isMobile}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                {carouselItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: { xs: 280, sm: 380, md: 450 }, // Slightly reduced heights
                      width: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.alt}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Carousel>
            </motion.div>
          </Grid>

          {/* Right: Bio Data Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: darkMode ? theme.palette.grey[800] : theme.palette.common.white,
                }}
              >
                <CardContent sx={{ p: 3 }}> {/* Reduced padding */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        width: 100, // Reduced from 120
                        height: 100, // Reduced from 120
                        mb: 1, // Reduced from mb: 2
                        border: `3px solid ${theme.palette.primary.main}`, // Thinner border
                      }}
                      src="https://via.placeholder.com/150"
                    />
                    <Typography
                      variant="h5" // Changed from h4
                      component="h1"
                      sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        mt: 1 // Added small top margin
                      }}
                    >
                      Stephen Bonfeb
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 1, // Reduced from mb: 2
                      }}
                    >
                      Full Stack Developer
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 1 }} /> {/* Reduced margin */}

                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      textAlign: "center",
                      mb: 2, // Reduced from mb: 3
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Building web applications with React and Django. Exploring mobile development using React.js.
                  </Typography>

                  <Divider sx={{ my: 1 }} /> {/* Reduced margin */}

                  <Box sx={{ mt: 2 }}> {/* Reduced margin */}
                    {infoItems.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5, // Reduced spacing
                        }}
                      >
                        {item.icon}
                        <Typography variant="body1" sx={{ mr: 1 }}>
                          {item.text}
                        </Typography>
                        {item.value && (
                          <Typography variant="body1" color="text.secondary">
                            {item.value}
                          </Typography>
                        )}
                        {item.link && (
                          <Link
                            to={item.link}
                            target={item.external ? "_blank" : "_self"}
                            rel={item.external ? "noopener noreferrer" : ""}
                            style={{
                              textDecoration: "none",
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {item.text}
                          </Link>
                        )}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Marquee Section - Made more compact */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: darkMode ? theme.palette.grey[800] : theme.palette.primary.light,
          py: 0.5, // Reduced padding
          mb: 1, // Reduced margin
          borderRadius: 0,
        }}
      >
        <Typography
          variant="body2" // Smaller font
          sx={{
            color: theme.palette.error.main,
            fontWeight: 700,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            overflow: "hidden",
            animation: "marquee 15s linear infinite",
            "@keyframes marquee": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          Welcome! It is Nice you are here.
        </Typography>
      </Paper>

      {/* Footer - Will now sit closer to content */}
      <Footer />
    </Box>
  );
};
export default Home;