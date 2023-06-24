import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesData } from '../redux/countrySlice';
import Header from './Header';
import Country from './cities';

const MainPage = () => {
  const citiesData = useSelector((state) => state.citiesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCitiesData());
  }, [dispatch]);

  return (
    <div id="main">
      <Header />
      <div className="ctd-container">
        {citiesData.map((cityData) => (
          <Link to={`world/${cityData.id}`} key={cityData.id}>
            <Country
              cityName={cityData.city}
              cityAqi={cityData.data.main.aqi}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
