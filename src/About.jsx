import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ScrollAnimation from "./ScrollAnimation";
import Container from "@mui/material/Container";

export default function About() {
  const features = [
    {
      icon: <WbSunnyIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      title: "Real-Time Updates",
      description:
        "Get instant weather updates powered by OpenWeatherMap API with accurate data refreshed in real-time.",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      title: "Global Coverage",
      description:
        "Search weather information for any city worldwide. From Mumbai to Bangkok, we've got you covered.",
    },
    {
      icon: <ThermostatIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      title: "Detailed Metrics",
      description:
        "View temperature, humidity, feels-like temperature, and comprehensive weather conditions at a glance.",
    },
    {
      icon: <CloudIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
      title: "Beautiful UI",
      description:
        "Experience weather data through a clean, modern interface built with Material-UI and stunning Unsplash imagery.",
    },
  ];

  const techStack = [
    {
      name: "React",
      purpose: "Component-based UI framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Material-UI",
      purpose: "Modern design system",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      color: "#007FFF",
    },
    {
      name: "OpenWeatherMap API",
      purpose: "Real-time weather data",
      icon: "☁️",
      color: "#FF6B35",
    },
    {
      name: "Unsplash",
      purpose: "High-quality imagery",
      icon: "📷",
      color: "#000000",
    },
    {
      name: "Framer Motion",
      purpose: "Smooth animations",
      icon: "✨",
      color: "#0055FF",
    },
    {
      name: "Claude AI",
      purpose: "AI-powered styling & animations",
      highlight: true,
      useAutoAwesome: true,
      color: "#764ba2",
    },
  ];

  return (
    <Box id="about" py={10} bgcolor="#f8f9fa">
      <Container maxWidth="lg">
        {/* Header */}
        <ScrollAnimation variant="scale-blur">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2}>
            About <span style={{ color: "#1976d2" }}>WeatherNow</span>
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={0.2}>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            maxWidth={700}
            mx="auto"
            mb={8}
          >
            A modern React-powered weather application delivering real-time
            weather updates for cities across the globe with a beautiful,
            intuitive interface.
          </Typography>
        </ScrollAnimation>

        {/* Features Grid */}
        <Grid container spacing={4} mb={10} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ScrollAnimation
                variant="blur-up"
                delay={index * 0.1}
                duration={0.7}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>

        {/* Tech Stack Section */}
        <ScrollAnimation variant="slide-left">
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            Built With Modern Technologies
          </Typography>
        </ScrollAnimation>

        <Grid container spacing={3} justifyContent="center" mb={10}>
          {techStack.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ScrollAnimation
                variant="slide-right"
                delay={index * 0.1}
                duration={0.6}
              >
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "all 0.3s ease",
                    background: tech.highlight
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "white",
                    color: tech.highlight ? "white" : "inherit",
                    border: tech.highlight ? "none" : "2px solid transparent",
                    "&:hover": {
                      bgcolor: tech.highlight ? undefined : "#f0f7ff",
                      transform: tech.highlight
                        ? "translateY(-5px) scale(1.02)"
                        : "translateY(-5px)",
                      boxShadow: tech.highlight ? 8 : 4,
                      borderColor: tech.highlight ? undefined : tech.color,
                    },
                  }}
                >
                  {/* Logo/Icon */}
                  {tech.useAutoAwesome ? (
                    <AutoAwesomeIcon sx={{ color: "white", fontSize: 40, flexShrink: 0 }} />
                  ) : tech.logo ? (
                    <Box
                      component="img"
                      src={tech.logo}
                      alt={tech.name}
                      sx={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                      }}
                    />
                  ) : tech.icon ? (
                    <Box
                      sx={{
                        fontSize: 32,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech.icon}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: tech.color || "#1976d2",
                        flexShrink: 0,
                      }}
                    />
                  )}

                  {/* Text Content */}
                  <Box flex={1}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: tech.highlight ? "white" : "inherit" }}
                    >
                      {tech.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: tech.highlight
                          ? "rgba(255,255,255,0.9)"
                          : "text.secondary",
                      }}
                    >
                      {tech.purpose}
                    </Typography>
                  </Box>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Section */}
        <Box>
          <ScrollAnimation variant="scale-blur">
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              mb={4}
            >
              Why Choose WeatherNow?
            </Typography>
          </ScrollAnimation>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <ScrollAnimation variant="bounce-in" delay={0.1}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="#1976d2"
                    mb={1}
                  >
                    100%
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Accurate Data
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Grid>

            <Grid item xs={12} md={4}>
              <ScrollAnimation variant="bounce-in" delay={0.2}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="#1976d2"
                    mb={1}
                  >
                    Global
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    City Coverage
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Grid>

            <Grid item xs={12} md={4}>
              <ScrollAnimation variant="bounce-in" delay={0.3}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="#1976d2"
                    mb={1}
                  >
                    Real-Time
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Updates
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}