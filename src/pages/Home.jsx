import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../components/Footer";

// Material-UI imports
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider, 
  useMediaQuery,
  Paper,
  IconButton,
  Tooltip,
  Avatar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// MUI Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import your slide images
import slideImg1 from "../assets/images/slideImage1.jpg";
import slideImg2 from "../assets/images/slideImage2.jpg";
import slideImg3 from "../assets/images/slideImage3.jpg";

// Custom styled components
const StyledCard = styled(Card)(({ theme, darkMode }) => ({
  height: '100%',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  background: darkMode ? theme.palette.grey[800] : theme.palette.background.paper,
  color: darkMode ? theme.palette.common.white : theme.palette.text.primary,
  "&:hover": {
    transform: 'translateY(-8px)',
  }
}));

const WelcomeBanner = styled(Box)(({ theme, darkMode }) => ({
  padding: theme.spacing(1),
  background: darkMode ? theme.palette.grey[900] : '#f5f5f5',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

const ImageCarousel = ({ images, darkMode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const timerRef = React.useRef(null);
  
  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timerRef.current);
  }, [images.length]);
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '350px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        borderRadius: 4,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      }}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.05,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: currentSlide === index ? 'block' : 'none',
          }}
        >
          <Box 
            component="img"
            src={img}
            alt={`Slide ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: darkMode ? 'brightness(0.85)' : 'none',
            }}
          />
        </Box>
      ))}
      
      <IconButton
        onClick={goToPrevSlide}
        sx={{
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
          },
          zIndex: 2,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      
      <IconButton
        onClick={goToNextSlide}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
          },
          zIndex: 2,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentSlide === index ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

const ContactItem = ({ icon, text, link, color }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <Box component="span" sx={{ mr: 1, fontWeight: 'bold' }}>➤</Box>
    <Avatar 
      sx={{ 
        bgcolor: color, 
        width: 28, 
        height: 28, 
        mr: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {icon}
    </Avatar>
    <Typography 
      component={Link} 
      to={link} 
      sx={{ 
        textDecoration: 'none', 
        color: 'text.secondary',
        '&:hover': {
          color: 'primary.main',
          textDecoration: 'underline'
        }
      }}
    >
      {text}
    </Typography>
  </Box>
);

const ProfileItem = ({ label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <Box component="span" sx={{ mr: 1, fontWeight: 'bold' }}>➤</Box>
    <Typography component="span" fontWeight="bold" sx={{ mr: 1 }}>
      {label}:
    </Typography>
    <Typography color="text.secondary">
      {value}
    </Typography>
  </Box>
);

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  
  const slides = [slideImg1, slideImg2, slideImg3];

  return (
    <Container 
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: darkMode ? 'grey.900' : 'grey.50',
        color: darkMode ? 'common.white' : 'text.primary',
        pt: 4,
        pb: 2,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {/* Welcome Banner */}
      <WelcomeBanner darkMode={darkMode}>
        <motion.div
          animate={{ 
            x: ["100%", "-100%"]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "linear"
          }}
        >
          <Typography 
            variant="h6" 
            component="span" 
            fontWeight="bold" 
            sx={{ 
              color: 'error.main', 
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            Welcome! It is Nice you are here.
          </Typography>
        </motion.div>
      </WelcomeBanner>

      {/* Main Content Grid */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          flexGrow: 1,
          my: { xs: 2, md: 4 },
        }}
      >
        {/* Order changes on small screens */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageCarousel images={slides} darkMode={darkMode} />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <StyledCard darkMode={darkMode}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" component="h1" fontWeight="bold" color={darkMode ? "primary.light" : "primary.main"}>
                    Stephen Bonfeb
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 3 }}>
                    Building web applications with React and Django. Exploring mobile development using React.js.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </Box>

                <Box sx={{ textAlign: 'left' }}>
                  <ProfileItem label="Profession" value="Bsc Information Technology" />
                  <ProfileItem label="Specialization" value="Software Development" />
                  
                  <ContactItem 
                    icon={<PhoneIcon fontSize="small" />} 
                    text="+254 794544826" 
                    link="tel:+254794544826" 
                    color="#1976d2"
                  />
                  
                  <ContactItem 
                    icon={<EmailIcon fontSize="small" />} 
                    text="bonfebdevs@gmail.com" 
                    link="mailto:bonfebdevs@gmail.com" 
                    color="#d32f2f"
                  />
                  
                  <ContactItem 
                    icon={<LanguageIcon fontSize="small" />} 
                    text="bonfebportfolio.netlify.app" 
                    link="https://bonfebportfolio.netlify.app/" 
                    color="#2e7d32"
                  />
                </Box>
                
                <Box 
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  sx={{ 
                    mt: 3, 
                    p: 2, 
                    borderRadius: 2,
                    bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                    border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  }}
                >
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    Let's build something amazing together! Feel free to reach out for collaborations or projects.
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </motion.div>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;