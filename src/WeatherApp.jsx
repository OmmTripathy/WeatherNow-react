import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./WeatherApp.css";

export default function WeatherApp({ tempUnit }) {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [highlightedCity, setHighlightedCity] = useState(null);
  const cardRefs = useRef({});

  const handleAddWeather = (newWeather) => {
    // Check if city already exists (case-insensitive)
    const existingIndex = weatherInfo.findIndex(
      (info) => info.city.toLowerCase() === newWeather.city.toLowerCase()
    );

    if (existingIndex !== -1) {
      // City already exists, scroll to it and highlight
      const cityName = weatherInfo[existingIndex].city;
      const cardId = `weather-card-${cityName}`;
      const cardElement = cardRefs.current[cardId];
      
      if (cardElement) {
        // Scroll to the card
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        
        // Highlight the card
        setHighlightedCity(cityName);
        
        // Remove highlight after animation
        setTimeout(() => {
          setHighlightedCity(null);
        }, 2000);
      }
    } else {
      // City doesn't exist, add it
      setWeatherInfo((prev) => [...prev, newWeather]);
    }
  };

  return (
    <Box id="forecast" py={4}>
      <ScrollAnimation variant="fade-up" duration={0.8}>
        <SearchBox setWeatherInfo={handleAddWeather} />
      </ScrollAnimation>

      {weatherInfo.length > 0 && (
        <Box px={{ xs: 2, md: 8 }} mt={4}>
          <Grid container spacing={3} justifyContent="center">
            {weatherInfo.map((info, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={`${info.city}-${index}`}
                ref={(el) => {
                  if (el) cardRefs.current[`weather-card-${info.city}`] = el;
                }}
                id={`weather-card-${info.city}`}
                className={highlightedCity === info.city ? "highlight-card" : ""}
              >
                <ScrollAnimation variant="scale-blur" duration={0.6} delay={index * 0.1}>
                  <InfoBox info={info} tempUnit={tempUnit} />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}