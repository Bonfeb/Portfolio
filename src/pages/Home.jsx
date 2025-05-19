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
  IconButton,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Phone, Email, Language, ArrowRight } from "@mui/icons-material";
import Footer from "../components/Footer";
import Carousel from "react-material-ui-carousel";
import slideImg1 from "../assets/images/slideImage1.jpg";
import slideImg2 from "../assets/images/slideImage2.jpg";
import slideImg3 from "../assets/images/slideImage3.jpg";

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
        transition: "all 0.3s ease",
      }}
    >
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4, flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
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
                  "& .CarouselItem": {
                    height: "100%",
                  },
                }}
              >
                {carouselItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: { xs: 300, sm: 400, md: 500 },
                      width: "100%",
                      position: "relative",
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
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 2,
                        boxShadow: 3,
                        border: `4px solid ${theme.palette.primary.main}`,
                      }}
                      src="https://via.placeholder.com/150" // Replace with your actual avatar image
                    />
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        textAlign: "center",
                      }}
                    >
                      Stephen Bonfeb
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                      }}
                    >
                      Full Stack Developer
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      textAlign: "center",
                      mb: 3,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    Building web applications with React and Django. Exploring mobile development using React.js.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mt: 3 }}>
                    {infoItems.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                          "&:hover": {
                            "& a": {
                              color: theme.palette.primary.main,
                            },
                          },
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
                              transition: "color 0.3s ease",
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

      {/* Marquee Section */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: darkMode ? theme.palette.grey[800] : theme.palette.primary.light,
          py: 1,
          mb: 2,
          borderRadius: 0,
        }}
      >
        <Typography
          variant="body1"
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

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;