import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import ScrollAnimation from "./ScrollAnimation";
import { convertTemp } from "./tempUtils";

export default function DefaultCitiesWeather({ tempUnit }) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultCities = ["Mumbai", "Pune", "Bangkok"];

  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const getWeatherImage = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes("rain") || weatherLower.includes("drizzle")) {
      return "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1200&auto=format&fit=crop";
    } else if (weatherLower.includes("cloud")) {
      return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop";
    } else if (weatherLower.includes("clear") || weatherLower.includes("sun")) {
      return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1200&auto=format&fit=crop";
    } else if (weatherLower.includes("snow")) {
      return "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1200&auto=format&fit=crop";
    } else if (weatherLower.includes("thunder") || weatherLower.includes("storm")) {
      return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1200&auto=format&fit=crop";
    }
    return "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?q=80&w=1200&auto=format&fit=crop";
  };

  const getWeatherIcon = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes("rain") || weatherLower.includes("drizzle")) {
      return <WaterDropIcon sx={{ fontSize: 50, color: "#fff" }} />;
    } else if (weatherLower.includes("cloud")) {
      return <CloudIcon sx={{ fontSize: 50, color: "#fff" }} />;
    } else if (weatherLower.includes("clear") || weatherLower.includes("sun")) {
      return <WbSunnyIcon sx={{ fontSize: 50, color: "#fff" }} />;
    } else if (weatherLower.includes("snow")) {
      return <AcUnitIcon sx={{ fontSize: 50, color: "#fff" }} />;
    } else if (weatherLower.includes("thunder") || weatherLower.includes("storm")) {
      return <ThunderstormIcon sx={{ fontSize: 50, color: "#fff" }} />;
    }
    return <WbSunnyIcon sx={{ fontSize: 50, color: "#fff" }} />;
  };

  useEffect(() => {
    const fetchWeatherForCities = async () => {
      try {
        const promises = defaultCities.map((city) =>
          fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((data) => ({
              city: data.name,
              country: data.sys.country,
              temp: data.main.temp,
              tempMin: data.main.temp_min,
              tempMax: data.main.temp_max,
              humidity: data.main.humidity,
              feelsLike: data.main.feels_like,
              weather: data.weather[0].description,
            }))
        );

        const results = await Promise.all(promises);
        setWeatherData(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching default cities weather:", error);
        setLoading(false);
      }
    };

    fetchWeatherForCities();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box px={{ xs: 2, md: 8 }} py={6}>
      <ScrollAnimation variant="scale-blur" duration={0.8}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Popular Cities Weather
        </Typography>
      </ScrollAnimation>

      <Grid container spacing={3} justifyContent="center">
        {weatherData.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} key={info.city}>
            <ScrollAnimation
              variant="blur-up"
              delay={index * 0.15}
              duration={0.7}
            >
              <Card
                sx={{
                  maxWidth: 320,
                  margin: "0 auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.18)",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 160, position: "relative" }}
                  image={getWeatherImage(info.weather)}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: 2,
                    }}
                  >
                    <Box display="flex" justifyContent="center">
                      <Box
                        sx={{
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                          padding: "10px",
                          borderRadius: "50%",
                        }}
                      >
                        {getWeatherIcon(info.weather)}
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                      >
                        {info.city}, {info.country}
                      </Typography>
                    </Box>
                  </Box>
                </CardMedia>

                <CardContent sx={{ p: 2.5, background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}>
                  <Box textAlign="center" mb={2}>
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      sx={{
                        background: "linear-gradient(135deg, #FF6B35, #F7931E)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "3.5rem",
                      }}
                    >
                      {Math.round(convertTemp(info.temp, tempUnit))}°
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ textTransform: "capitalize" }}>
                      {info.weather}
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="space-around"
                    gap={1}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        background: "white",
                        borderRadius: "12px",
                        padding: "10px 8px",
                        flex: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                        },
                      }}
                    >
                      <ThermostatIcon sx={{ color: "#1976d2", fontSize: 22, mb: 0.5 }} />
                      <Typography variant="caption" display="block" color="text.secondary" fontSize="0.7rem">
                        Feels Like
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" fontSize="0.9rem">
                        {Math.round(convertTemp(info.feelsLike, tempUnit))}°{tempUnit}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        textAlign: "center",
                        background: "white",
                        borderRadius: "12px",
                        padding: "10px 8px",
                        flex: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                        },
                      }}
                    >
                      <WaterDropIcon sx={{ color: "#1976d2", fontSize: 22, mb: 0.5 }} />
                      <Typography variant="caption" display="block" color="text.secondary" fontSize="0.7rem">
                        Humidity
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" fontSize="0.9rem">
                        {info.humidity}%
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        textAlign: "center",
                        background: "white",
                        borderRadius: "12px",
                        padding: "10px 8px",
                        flex: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                        },
                      }}
                    >
                      <ThermostatIcon sx={{ color: "#1976d2", fontSize: 22, mb: 0.5 }} />
                      <Typography variant="caption" display="block" color="text.secondary" fontSize="0.7rem">
                        Min/Max
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" fontSize="0.9rem">
                        {Math.round(convertTemp(info.tempMin, tempUnit))}°/{Math.round(convertTemp(info.tempMax, tempUnit))}°
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}