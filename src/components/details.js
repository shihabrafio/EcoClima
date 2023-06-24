import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AirData, CityName } from './helper';
import Detail from './city';

const Details = () => {
  const storedCitiesData = useSelector((state) => state.citiesData);
  const { cityId } = useParams();
  const Air = AirData(cityId, storedCitiesData);
  const Name = CityName(cityId, storedCitiesData);
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
          <Detail
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
