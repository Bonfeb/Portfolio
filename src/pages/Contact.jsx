import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Material UI imports
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Fade,
  Snackbar,
  useTheme,
  Alert,
  CircularProgress,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";

// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Import background image
import contactBg from "../assets/images/contactBg.jpg";

// Styled components
const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: theme.spacing(8, 0),
  position: "relative",
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const StyledTextField = styled(TextField)(({ theme, darkMode }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: darkMode ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
  },
  "& .MuiInputLabel-root": {
    color: darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
  },
  "& .MuiInputBase-input": {
    backgroundColor: darkMode ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.06)",
    borderRadius: theme.shape.borderRadius,
    color: darkMode ? "#fff" : theme.palette.text.primary,
  },
}));

const ContactCard = styled(Card)(({ theme, darkMode }) => ({
  background: darkMode 
    ? "rgba(33, 16, 61, 0.9)" 
    : "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  height: "100%",
}));

const InfoCard = styled(Card)(({ theme, darkMode }) => ({
  background: darkMode 
    ? "rgba(20, 20, 40, 0.9)" 
    : "rgba(240, 240, 255, 0.9)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  height: "100%",
}));

const ContactInfoItem = ({ icon, title, value, color }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Box
        sx={{
          bgcolor: color,
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 2,
          boxShadow: theme.shadows[2],
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body1" fontWeight="medium">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const SocialButton = styled(IconButton)(({ theme, color }) => ({
  backgroundColor: color,
  color: "#fff",
  transition: theme.transitions.create(["transform", "box-shadow"]),
  "&:hover": {
    backgroundColor: color,
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[4],
  },
}));

function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [variant, setVariant] = useState("success");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID;

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        setVariant("success");
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setOpenSnackbar(true);
      })
      .catch((error) => {
        setVariant("error");
        setResponseMessage("Failed to send message. Please try again later.");
        setOpenSnackbar(true);
      })
      .finally(() => setLoading(false));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ color: "#fff" }} />,
      title: "Location",
      value: "Nairobi, Kenya",
      color: theme.palette.primary.main,
    },
    {
      icon: <EmailIcon sx={{ color: "#fff" }} />,
      title: "Email",
      value: "bonfebdevs@gmail.com",
      color: theme.palette.error.main,
    },
    {
      icon: <PhoneIcon sx={{ color: "#fff" }} />,
      title: "Phone",
      value: "+254 794544826",
      color: theme.palette.success.main,
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, color: "#0077B5", tooltip: "LinkedIn" },
    { icon: <GitHubIcon />, color: "#333", tooltip: "GitHub" },
  ];

  return (
    <>
      <ContactContainer>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              align="center"
              sx={{ 
                fontWeight: 700, 
                color: "#fff",
                mb: 1,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Contact Me
            </Typography>
            
            <Typography 
              variant="h6" 
              align="center" 
              sx={{ 
                mb: 6, 
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              Feel free to reach out. I'd love to hear from you!
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Form Column - Will be first on mobile, left on desktop */}
            <Grid item xs={12} md={6} lg={7} order={{ xs: 2, md: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactCard darkMode={darkMode}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      Send a Message
                    </Typography>

                    <form onSubmit={handleSubmit}>
                      <Box sx={{ display: "flex", gap: 2, flexDirection: isMobile ? "column" : "row" }}>
                        <StyledTextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          darkMode={darkMode}
                          InputProps={{
                            startAdornment: (
                              <PersonIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                            ),
                          }}
                        />
                        
                        <StyledTextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          darkMode={darkMode}
                          InputProps={{
                            startAdornment: (
                              <EmailIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                            ),
                          }}
                        />
                      </Box>

                      <StyledTextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        darkMode={darkMode}
                        InputProps={{
                          startAdornment: (
                            <PhoneIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                          ),
                        }}
                      />

                      <StyledTextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                        darkMode={darkMode}
                        InputProps={{
                          startAdornment: (
                            <MessageIcon 
                              sx={{ 
                                mr: 1, 
                                color: theme.palette.primary.main,
                                alignSelf: "flex-start",
                                mt: 1
                              }} 
                            />
                          ),
                        }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={loading}
                          sx={{
                            mt: 2,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 600,
                          }}
                          endIcon={loading ? null : <SendIcon />}
                        >
                          {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </ContactCard>
              </motion.div>
            </Grid>

            {/* Contact Info Column - Will be second on mobile, right on desktop */}
            <Grid item xs={12} md={6} lg={5} order={{ xs: 1, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <InfoCard darkMode={darkMode}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      {contactInfo.map((info, index) => (
                        <ContactInfoItem
                          key={index}
                          icon={info.icon}
                          title={info.title}
                          value={info.value}
                          color={info.color}
                        />
                      ))}
                    </Box>

                    <Divider sx={{ my: 3 }} />
                    
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        Connect with me
                      </Typography>
                      
                      <Box sx={{ display: "flex", gap: 2 }}>
                        {socialLinks.map((link, index) => (
                          <Tooltip key={index} title={link.tooltip} arrow>
                            <SocialButton
                              color={link.color}
                              component={motion.button}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              sx={{ width: 44, height: 44 }}
                            >
                              {link.icon}
                            </SocialButton>
                          </Tooltip>
                        ))}
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        mt: 4, 
                        p: 2, 
                        borderRadius: 2,
                        bgcolor: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: "italic",
                          color: "text.secondary",
                        }}
                      >
                        I'm currently available for freelance work. Let's discuss your project!
                      </Typography>
                    </Box>
                  </CardContent>
                </InfoCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContactContainer>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Fade}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={variant} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {responseMessage}
        </Alert>
      </Snackbar>
      
      <Footer />
    </>
  );
}

export default Contact;