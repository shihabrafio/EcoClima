const apiKey = '4cd28e645dec12995d6b9e36bb63708d';

const getCityIndex = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const getCityCoord = async (ctry) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ctry}&limit=1&appid=${apiKey}`);
    const data = await response.json();
    return (data);
  } catch (error) {
    return error;
  }
};

export { getCityIndex, getCityCoord };
