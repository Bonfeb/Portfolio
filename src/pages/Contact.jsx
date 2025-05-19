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
  Paper,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Fade,
  Snackbar
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
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.mode === "light" 
      ? "rgba(255, 255, 255, 0.9)" 
      : "rgba(0, 0, 0, 0.7)",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

const ContactCard = styled(Card)(({ theme, darkMode }) => ({
  background: darkMode 
    ? "linear-gradient(135deg, rgba(33, 16, 61, 0.9), rgba(50, 50, 70, 0.9))" 
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 250, 0.95))",
  backdropFilter: "blur(10px)",
  borderRadius: theme.spacing(2),
  boxShadow: darkMode 
    ? "0 10px 30px rgba(0, 0, 0, 0.5)" 
    : "0 10px 30px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
  position: "relative",
  border: "1px solid",
  borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.5)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
    zIndex: 1,
  },
}));

const InfoCard = styled(Card)(({ theme, darkMode }) => ({
  background: darkMode 
    ? "linear-gradient(135deg, rgba(20, 20, 40, 0.9), rgba(40, 40, 60, 0.9))" 
    : "linear-gradient(135deg, rgba(240, 240, 255, 0.9), rgba(225, 225, 245, 0.95))",
  backdropFilter: "blur(10px)",
  borderRadius: theme.spacing(2),
  boxShadow: darkMode 
    ? "0 10px 30px rgba(0, 0, 0, 0.5)" 
    : "0 10px 30px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
  height: "100%",
  border: "1px solid",
  borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.5)",
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
          boxShadow: `0 4px 8px ${color}50`,
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
  width: 44,
  height: 44,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: color,
    transform: "translateY(-5px)",
    boxShadow: `0 5px 15px ${color}80`,
  },
}));

function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID; // Public Key from EmailJS

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
        setResponseMessage("Failed to send message. Try again later.");
        setOpenSnackbar(true);
      })
      .finally(() => setLoading(false));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ color: "#fff" }} />,
      title: "Location",
      value: "Nairobi, Kenya",
      color: "#2196f3",
    },
    {
      icon: <EmailIcon sx={{ color: "#fff" }} />,
      title: "Email",
      value: "bonfebdevs@gmail.com",
      color: "#f44336",
    },
    {
      icon: <PhoneIcon sx={{ color: "#fff" }} />,
      title: "Phone",
      value: "+254 794544826",
      color: "#4caf50",
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, color: "#0077B5", tooltip: "LinkedIn" },
    { icon: <GitHubIcon />, color: "#333", tooltip: "GitHub" },
  ];

  return (
    <>
      <ContactContainer>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: 4 }}>
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
                textTransform: "uppercase",
                color: "#fff",
                mb: 1,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
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
                fontWeight: 300,
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              Feel free to reach out. I'd love to hear from you!
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Form Column */}
            <Grid item xs={12} md={7}>
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
                        color: darkMode ? "#fff" : theme.palette.primary.main,
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
                            position: "relative",
                            overflow: "hidden",
                            background: darkMode 
                              ? "linear-gradient(90deg, #2196f3, #3f51b5)" 
                              : "linear-gradient(90deg, #3f51b5, #2196f3)",
                            textTransform: "none",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(63, 81, 181, 0.4)",
                            '&:hover': {
                              boxShadow: "0 6px 16px rgba(63, 81, 181, 0.6)",
                            }
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

            {/* Contact Info Column */}
            <Grid item xs={12} md={5}>
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
                        color: darkMode ? "#fff" : theme.palette.primary.main,
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

                    <Divider sx={{ my: 3, opacity: 0.6 }} />
                    
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 2,
                          fontWeight: 500,
                          color: darkMode ? "#fff" : theme.palette.text.primary,
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
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
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
                        border: "1px dashed",
                        borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: "italic",
                          color: darkMode ? "rgba(255,255,255,0.7)" : "text.secondary",
                        }}
                      >
                        I'm currently available for freelance work. Let's discuss your project and make it happen!
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