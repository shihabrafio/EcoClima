import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AirData, CityName } from './Airdata';
import Country from './Country';

const Details = () => {
  const countryData = useSelector((state) => state.countriesData);
  const { countryId } = useParams();
  const Air = AirData(countryId, countryData);
  const Name = CityName(countryId, countryData);
  return (
    <div id="details">
      <nav>
        <Link to="/">
          <h1 className="back">&#60;</h1>
        </Link>
        <h2>
          {Name}
        </h2>
      </nav>
      <header>
        <h1>
          Air components Concentrations
        </h1>
      </header>
      <div className="dts-header">Concentration in μg/m3</div>
      <div className="dts-container">
        {Air.map((component) => (
          <Country
            key={component.name}
            name={component.name}
            value={component.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
