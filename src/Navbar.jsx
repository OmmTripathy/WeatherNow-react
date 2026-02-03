import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Navbar({ tempUnit, setTempUnit }) {
  const navButtons = [
    { label: "Home", to: "home" },
    { label: "Forecast", to: "forecast" },
    { label: "About", to: "about" },
    { label: "Contact", to: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  const toggleTempUnit = () => {
    setTempUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        color: "black",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" fontWeight="bold">
          Weather<span style={{ color: "#1976d2" }}>Now.</span>
        </Typography>

        {/* Center Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navButtons.map((btn) => (
            <motion.div
              key={btn.label}
              whileHover={{ scale: 1.02 }}
              style={{ display: "inline-block", position: "relative" }}
            >
              <Button
                onClick={() => scrollToSection(btn.to)}
                sx={{
                  textTransform: "none",
                  color: "#111",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#1976d2",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:after": {
                    width: "100%",
                  },
                }}
              >
                {btn.label}
              </Button>
            </motion.div>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={toggleTempUnit}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: "#111",
          }}
        >
          °{tempUnit}
        </Button>
      </Toolbar>
    </AppBar>
  );
}