import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countrySlice';
import Header from './Header';
import Countries from './Countries';

const MainPage = () => {
  const countriesData = useSelector((state) => state.countriesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div id="main">
      <Header />
      <div className="ctd-container">
        {countriesData.map((data) => (
          <Link to={`world/${data.id}`} key={data.id}>
            <Countries
              cityName={data.city}
              cityAqi={data.data.main.aqi}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
