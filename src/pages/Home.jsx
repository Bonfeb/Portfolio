import React, { useContext, useState, useEffect } from "react";
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
  Paper,
  Fade,
  IconButton
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { Phone, Email, Language, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Footer from "../components/Footer";
import slideImage1 from "../assets/images/slideImage1.jpg";
import slideImage2 from "../assets/images/slideImage2.jpg";
import slideImage3 from "../assets/images/slideImage3.jpg";

// Custom carousel component instead of react-material-ui-carousel for better control
const ImageCarousel = ({ items }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % items.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, items.length]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % items.length);
    setAutoPlay(false);
    // Resume autoplay after user interaction
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + items.length) % items.length);
    setAutoPlay(false);
    // Resume autoplay after user interaction
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 280, sm: 350, md: 420, lg: 480 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: theme.shadows[8],
      }}
    >
      {items.map((item, index) => (
        <Fade key={index} in={index === activeStep} timeout={800}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: index === activeStep ? "block" : "none",
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
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "white",
                padding: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="body2">{item.alt}</Typography>
            </Box>
          </Box>
        </Fade>
      ))}
      
      {!isMobile && (
        <>
          <IconButton
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.5)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
            }}
            onClick={handleBack}
            size="large"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.5)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
            }}
            onClick={handleNext}
            size="large"
          >
            <KeyboardArrowRight />
          </IconButton>
        </>
      )}
      
      {/* Dot indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setActiveStep(index);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 10000);
            }}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              margin: "0 4px",
              backgroundColor:
                activeStep === index ? theme.palette.primary.main : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const carouselItems = [
    { img: slideImage1, alt: "Development workspace" },
    { img: slideImage2, alt: "Coding session" },
    { img: slideImage3, alt: "Project collaboration" },
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

  // Split items into two categories for better display
  const personalItems = infoItems.slice(0, 2);
  const contactItems = infoItems.slice(2);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: darkMode 
          ? `${theme.palette.grey[900]}` 
          : `linear-gradient(145deg, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)`,
        color: darkMode ? theme.palette.common.white : theme.palette.common.black,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      {/* Hero Banner - Full width welcome message */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 1.5, sm: 2 },
          px: 2,
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: theme.shadows[3],
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant={isSmall ? "body1" : "h6"} sx={{ fontWeight: 500 }}>
            Welcome! It is Nice you are here.
          </Typography>
        </motion.div>
        
        {/* Background decoration */}
        <Box 
          sx={{
            position: "absolute",
            top: -15,
            left: -15,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
            zIndex: 0,
          }}
        />
        <Box 
          sx={{
            position: "absolute",
            bottom: -20,
            right: -20,
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
            zIndex: 0,
          }}
        />
      </Box>

      {/* Main Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: { xs: 3, md: 5 },
          px: { xs: 2, sm: 3 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, md: 5 }}
          alignItems="center" 
          justifyContent="center"
          direction={isMobile ? "column-reverse" : "row"}
        >
          {/* Left: Image Carousel */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ImageCarousel items={carouselItems} />
            </motion.div>
          </Grid>

          {/* Right: Bio Data Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card
                elevation={darkMode ? 4 : 2}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  background: darkMode 
                    ? `linear-gradient(145deg, ${theme.palette.grey[800]} 0%, ${theme.palette.grey[900]} 100%)` 
                    : `linear-gradient(145deg, ${theme.palette.common.white} 0%, ${theme.palette.grey[50]} 100%)`,
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: darkMode ? theme.shadows[8] : theme.shadows[6],
                    transform: "translateY(-5px)",
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <motion.div variants={itemVariants}>
                      <Avatar
                        sx={{
                          width: { xs: 90, sm: 120 },
                          height: { xs: 90, sm: 120 },
                          mb: 2,
                          border: `4px solid ${theme.palette.primary.main}`,
                          boxShadow: theme.shadows[4],
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          }
                        }}
                        src="https://via.placeholder.com/150"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Typography
                        variant={isSmall ? "h5" : "h4"}
                        component="h1"
                        sx={{
                          fontWeight: 700,
                          textAlign: "center",
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          mb: 0.5,
                        }}
                      >
                        Stephen Bonfeb
                      </Typography>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: darkMode ? theme.palette.grey[400] : theme.palette.text.secondary,
                          mb: 2,
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        Full Stack Developer
                      </Typography>
                    </motion.div>
                  </Box>

                  <motion.div variants={itemVariants}>
                    <Divider 
                      sx={{ 
                        my: 2,
                        borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        width: "60%",
                        mx: "auto",
                        opacity: 0.6,
                      }} 
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        textAlign: "center",
                        mb: 2,
                        px: { xs: 1, sm: 3 },
                        color: darkMode ? theme.palette.grey[300] : theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      Building web applications with React and Django. Exploring mobile development using React.js.
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Divider 
                      sx={{ 
                        my: 2,
                        borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        width: "60%",
                        mx: "auto",
                        opacity: 0.6,
                      }} 
                    />
                  </motion.div>

                  {/* Personal Info Section */}
                  <Box sx={{ mt: 1, mb: 2 }}>
                    <Grid container spacing={1}>
                      {personalItems.map((item, index) => (
                        <Grid item xs={12} sm={6} key={`personal-${index}`}>
                          <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                          >
                            <Paper
                              elevation={darkMode ? 3 : 1}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1.5,
                                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                                borderRadius: 2,
                                height: "100%",
                              }}
                            >
                              {item.icon}
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  {item.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {item.value}
                                </Typography>
                              </Box>
                            </Paper>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Contact Info Section */}
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        mb: 1.5,
                        mt: 2,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      Get in touch
                    </Typography>
                  </motion.div>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={`contact-${index}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Box
                          component={item.link ? Link : Box}
                          to={item.link}
                          target={item.external ? "_blank" : "_self"}
                          rel={item.external ? "noopener noreferrer" : ""}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: darkMode ? theme.palette.primary.light : theme.palette.primary.main,
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            py: 0.5,
                            "&:hover": {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {item.icon}
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: isSmall ? "normal" : "nowrap",
                              fontSize: { xs: "0.8rem", sm: "0.875rem" },
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;