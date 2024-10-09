'use client';

import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

// WeatherApp Component
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({ pune: null, belgaum: null });
  const [error, setError] = useState(null);
  const apiKey = "522a29bcf6ed91ad523a945d38020eec"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      // Request for Pune
      const puneResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=522a29bcf6ed91ad523a945d38020eec
&units=metric`
      );

      // Request for Belgaum
      const belgaumResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Belgaum&appid=522a29bcf6ed91ad523a945d38020eec
&units=metric`
      );

      // Set weather data
      setWeatherData({ pune: puneResponse.data, belgaum: belgaumResponse.data });
      setError(null);
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
      setWeatherData({ pune: null, belgaum: null });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-blue-600 text-white px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-6">Weather in Pune & Belgaum</h1>

      <button
        onClick={fetchWeather}
        className="flex items-center justify-center p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md mb-6 transition duration-300"
      >
        <FaSearch className="mr-2" /> Get Weather
      </button>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Display Pune Weather */}
        {weatherData.pune && (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col">
            <h2 className="text-3xl font-bold text-center truncate">{weatherData.pune.name}</h2>
            <div className="flex justify-center items-center my-4">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.pune.weather[0].icon}@2x.png`}
                alt={weatherData.pune.weather[0].description}
                className="w-24 h-24"
              />
              <div className="text-center ml-4">
                <p className="text-6xl font-bold">{weatherData.pune.main.temp}°C</p>
                <p className="text-lg">{weatherData.pune.weather[0].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-blue-200">
                <p className="text-lg font-medium">Feels Like</p>
                <p className="text-2xl font-semibold">{weatherData.pune.main.feels_like}°C</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-yellow-200">
                <p className="text-lg font-medium">Humidity</p>
                <p className="text-2xl font-semibold">{weatherData.pune.main.humidity}%</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-green-200">
                <p className="text-lg font-medium">Pressure</p>
                <p className="text-2xl font-semibold">{weatherData.pune.main.pressure} hPa</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-purple-200">
                <p className="text-lg font-medium">Wind Speed</p>
                <p className="text-2xl font-semibold">{weatherData.pune.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}

        {/* Display Belgaum Weather */}
        {weatherData.belgaum && (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col">
            <h2 className="text-3xl font-bold text-center truncate">{weatherData.belgaum.name}</h2>
            <div className="flex justify-center items-center my-4">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.belgaum.weather[0].icon}@2x.png`}
                alt={weatherData.belgaum.weather[0].description}
                className="w-24 h-24"
              />
              <div className="text-center ml-4">
                <p className="text-6xl font-bold">{weatherData.belgaum.main.temp}°C</p>
                <p className="text-lg">{weatherData.belgaum.weather[0].description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-blue-200">
                <p className="text-lg font-medium">Feels Like</p>
                <p className="text-2xl font-semibold">{weatherData.belgaum.main.feels_like}°C</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-yellow-200">
                <p className="text-lg font-medium">Humidity</p>
                <p className="text-2xl font-semibold">{weatherData.belgaum.main.humidity}%</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-green-200">
                <p className="text-lg font-medium">Pressure</p>
                <p className="text-2xl font-semibold">{weatherData.belgaum.main.pressure} hPa</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg shadow-sm transition duration-300 hover:bg-purple-200">
                <p className="text-lg font-medium">Wind Speed</p>
                <p className="text-2xl font-semibold">{weatherData.belgaum.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
