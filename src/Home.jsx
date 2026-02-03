import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import weatherHero from "./assets/weather-hero.svg";
import { motion } from "framer-motion";
import DefaultCitiesWeather from "./DefaultCitiesWeather.jsx";
import About from "./About.jsx";
import WeatherApp from "./WeatherApp";
import Contact from "./Contact.jsx";

export default function Home({ tempUnit }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* MAIN HERO SECTION */}
      <Grid
        id="home"
        container
        minHeight="90vh"
        alignItems="center"
        px={{ xs: 2, md: 8 }}
      >
        {/* LEFT: TEXT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
            }}
          >
            <Typography variant="h2" fontWeight="bold" lineHeight={1.2}>
              Real-time <span style={{ color: "#1976d2" }}>Weather</span> <br />
              updates for <br />
              <span>any </span>
              <span style={{ color: "#1976d2" }}>City</span>
            </Typography>

            <Typography mt={3} color="text.secondary" maxWidth={450}>
              Search any city worldwide and get accurate temperature, humidity,
              and weather conditions instantly.
            </Typography>

            <Box mt={4} display="flex" justifyContent="center" maxWidth={450}>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "24px" }}
                onClick={() => scrollToSection("forecast")}
              >
                Check Weather
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT: IMAGE */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.img
            src={weatherHero}
            alt="Weather app preview"
            style={{ width: "100%", maxWidth: 480 }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
            }}
          />
        </Grid>
      </Grid>

      <DefaultCitiesWeather tempUnit={tempUnit} />
      <WeatherApp tempUnit={tempUnit} />
      <About />
      <Contact />
    </>
  );
}