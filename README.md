# 🌦️ WeatherNow — Real-Time Weather App

WeatherNow is a modern and responsive weather application built using **React.js**, **Vite**, and the **OpenWeather API**. It provides real-time weather information for cities around the world with a clean and user-friendly interface.

[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

🔗 **Live Demo:** [weathernowreact.netlify.app](https://weathernowreact.netlify.app/)

---

## 🚀 Features

* 🌍 Search weather by city name
* 🌡️ Real-time temperature updates
* 💨 Wind speed information
* 💧 Humidity percentage
* ☁️ Weather condition descriptions
* 🎯 Accurate weather data from OpenWeather API
* 📱 Responsive design for desktop and mobile devices
* ⚡ Fast performance powered by Vite

---
 
## Tech Stack
 
| Layer | Tool |
|---|---|
| Frontend | React.js, JavaScript (ES6+), CSS3 |
| Build Tool | Vite |
| Data Source | OpenWeather API (REST) |
| Deployment | Netlify |
 
---
 
## Project Structure
 
```
WeatherNow/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```
 
---
 
## Setup
 
**1. Clone the repo**
```bash
git clone https://github.com/OmmTripathy/WeatherNow-react.git
cd WeatherNow-react
```
 
**2. Install dependencies**
```bash
npm install
```
 
**3. Add your API key**
```bash
cp .envexample .env
# Open .env and add your OpenWeather API key
```
 
```env
VITE_OPENWEATHER_API_KEY=your_key_here
```
 
Get a free API key at [openweathermap.org/api](https://openweathermap.org/api)
 
**4. Run**
```bash
npm run dev
```
 
App opens at `http://localhost:5173`
 
---
 
## Author
 
**Omm Kishor Tripathy** — [LinkedIn](https://linkedin.com/in/ommtripathy) · [GitHub](https://github.com/OmmTripathy)
