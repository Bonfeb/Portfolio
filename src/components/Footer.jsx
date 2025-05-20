import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Box, Typography, Container, IconButton, Stack } from "@mui/material";

const Footer = () => {
  const twitter = import.meta.env.VITE_TWITTER;
  const facebook = import.meta.env.VITE_FACEBOOK;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;

  return (
    <Box
      component="footer"
      sx={{
        mt: 0,
        py: 4,
        bgcolor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Stephen Bonfeb
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: "italic", mb: 4 }}>
          Useful links to get in touch with me.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "success.main",
              color: "black",
              "&:hover": {
                bgcolor: "success.dark",
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <FaGithub size={18} />
          </IconButton>

          <IconButton
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "success.main",
              color: "black",
              "&:hover": {
                bgcolor: "success.dark",
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <FaXTwitter size={18} />
          </IconButton>

          <IconButton
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "success.main",
              color: "black",
              "&:hover": {
                bgcolor: "success.dark",
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <FaFacebook size={18} />
          </IconButton>

          <IconButton
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "success.main",
              color: "black",
              "&:hover": {
                bgcolor: "success.dark",
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <FaLinkedin size={18} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
