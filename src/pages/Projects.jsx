import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Paper,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { projects } from "../assets/data";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${theme.palette.grey[800]}, ${theme.palette.grey[900]})`
      : `linear-gradient(145deg, ${theme.palette.common.white}, ${theme.palette.grey[50]})`,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  border: 0,
  borderRadius: theme.spacing(3),
  color: "white",
  padding: theme.spacing(1.5, 4),
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[8],
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 0, 6),
  background: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.main,
    0.1
  )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
  borderRadius: theme.spacing(3),
  marginBottom: theme.spacing(6),
}));

const Projects = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div variants={cardVariants}>
      <Grid item xs={12} sm={6} md={4}>
        <StyledCard>
          <CardMedia
            component="img"
            height="240"
            image={project.image}
            alt={project.title}
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.6 }}
            >
              {project.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  variant="outlined"
                  icon={<CodeIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                />
              ))}
            </Stack>
          </CardContent>

          <CardActions sx={{ p: 2, pt: 0 }}>
            <Button
              size="small"
              startIcon={<LaunchIcon />}
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{ mr: 1 }}
            >
              Demo
            </Button>
            <Button
              size="small"
              startIcon={<GitHubIcon />}
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              Code
            </Button>
          </CardActions>
        </StyledCard>
      </Grid>
    </motion.div>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              A collection of projects showcasing various technologies and
              problem-solving approaches. Each project represents learning and
              growth in different areas of development.
            </Typography>
          </HeroSection>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Paper
            elevation={3}
            sx={{
              textAlign: "center",
              p: 6,
              mt: 8,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.05
              )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Interested in collaborating?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 300 }}
            >
              I'm always open to discussing new opportunities and interesting
              projects.
            </Typography>
            <GradientButton
              startIcon={<EmailIcon />}
              component="a"
              href="mailto:bonfebdevs@gmail.com?subject=Contact%20Request&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20about..."
              size="large"
            >
              Get In Touch
            </GradientButton>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;