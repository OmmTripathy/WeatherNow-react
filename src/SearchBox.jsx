import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { forwardRef, useImperativeHandle } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function SearchBox({ setWeatherInfo }, ref) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY;


  let getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      throw error;
    }
  };

  useImperativeHandle(ref, () => ({
    getWeatherInfo,
  }));

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);

      let newInfo = await getWeatherInfo(city);
      setWeatherInfo(newInfo);
      setCity("");
    } catch (error) {
      setError(true);
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <Box className="SearchBox">
      <ScrollAnimation variant="scale-blur">
        <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2}>
          Search <span style={{ color: "#1976d2" }}>Weather</span>
        </Typography>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={0.2}>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Enter any city name to get real-time weather updates
        </Typography>
      </ScrollAnimation>

      <ScrollAnimation variant="blur-up" delay={0.3}>
        <form onSubmit={handleSubmit} className="search-form">
          <Box className="search-input-container">
            <TextField
              id="city"
              label="Enter City Name"
              variant="outlined"
              required
              value={city}
              onChange={handleChange}
              fullWidth
              className="search-input"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "white",
                  "&:hover fieldset": {
                    borderColor: "#1976d2",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2",
                    borderWidth: "2px",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              className="search-button"
              startIcon={<SearchIcon />}
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "#1976d2",
                boxShadow: "0 4px 14px rgba(25, 118, 210, 0.4)",
                "&:hover": {
                  backgroundColor: "#1565c0",
                  boxShadow: "0 6px 20px rgba(25, 118, 210, 0.6)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Search
            </Button>
          </Box>

          {error && (
            <Box className="error-message">
              <Typography color="error" variant="body2">
                ⚠️ No such place found. Please try again.
              </Typography>
            </Box>
          )}
        </form>
      </ScrollAnimation>
    </Box>
  );
}