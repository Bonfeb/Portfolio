import React, { useState } from "react";
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
  Fade,
  Zoom,
  IconButton,
  Tooltip,
  Divider,
  Stack,
  useTheme,
  alpha,
  Backdrop,
} from "@mui/material";
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Star as StarIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { projects } from "../assets/data";

// Styled components
const StyledCard = styled(Card)(({ theme, featured }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(145deg, ${theme.palette.grey[800]}, ${theme.palette.grey[900]})`
      : `linear-gradient(145deg, ${theme.palette.common.white}, ${theme.palette.grey[50]})`,
  border: featured ? `2px solid ${theme.palette.primary.main}` : "none",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: theme.shadows[20],
    "& .card-overlay": {
      opacity: 1,
    },
    "& .card-media": {
      transform: "scale(1.1)",
    },
  },
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: 240,
  position: "relative",
  transition: "transform 0.4s ease",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.main,
    0.9
  )}, ${alpha(theme.palette.secondary.main, 0.9)})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  backdropFilter: "blur(4px)",
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 1,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.5, 1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
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
  const [hoveredCard, setHoveredCard] = useState(null);
  const theme = useTheme();

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({ project, featured = false, index }) => (
    <Zoom in={true} timeout={300 + index * 100}>
      <Grid item xs={12} sm={6} md={featured ? 6 : 4}>
        <StyledCard
          featured={featured}
          onMouseEnter={() => setHoveredCard(project.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {featured && (
            <FeaturedBadge>
              <StarIcon sx={{ fontSize: 16, color: "white" }} />
              <Typography
                variant="caption"
                sx={{ color: "white", fontWeight: 600 }}
              >
                Featured
              </Typography>
            </FeaturedBadge>
          )}

          <Box sx={{ position: "relative" }}>
            <CardMediaStyled
              className="card-media"
              image={project.image}
              title={project.title}
            />
            <CardOverlay className="card-overlay">
              <Stack direction="row" spacing={2}>
                <Tooltip title="View Live Demo" arrow>
                  <IconButton
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.3)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View Source Code" arrow>
                  <IconButton
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.3)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </CardOverlay>
          </Box>

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
    </Zoom>
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
        <HeroSection>
          <Fade in={true} timeout={800}>
            <Box>
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
            </Box>
          </Fade>
        </HeroSection>

        {/* Featured Projects */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <StarIcon sx={{ color: theme.palette.primary.main }} />
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={true}
                index={index}
              />
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Other Projects */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CodeIcon sx={{ color: theme.palette.secondary.main }} />
            Other Projects
          </Typography>

          <Grid container spacing={3}>
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
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
            href="mailto:your.email@example.com"
            size="large"
          >
            Get In Touch
          </GradientButton>
        </Paper>
      </Container>
    </Box>
  );
};

export default Projects;
