const fetchLocation = async (ctry) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ctry}&limit=1&appid=4cd28e645dec12995d6b9e36bb63708d`);
    const data = await response.json();
    const country = { country: data[0].name, lat: data[0].lat, lon: data[0].lon };
    return (country);
  } catch (error) {
    return error;
  }
};

const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=4cd28e645dec12995d6b9e36bb63708d`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchLocation, fetchWeather };
