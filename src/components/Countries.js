const Countries = (props) => {
  const { cityName, cityAqi } = props;
  let status = null;
  let style = { fontWeight: '800' };

  if (cityAqi === 1) {
    status = 'Good';
    style = { ...style, color: '#0f0' };
  } else if (cityAqi === 2) {
    status = 'Fair';
    style = { ...style, color: '#5affa5' };
  } else if (cityAqi === 3) {
    status = 'Moderate';
    style = { ...style, color: '#ff0' };
  } else if (cityAqi === 4) {
    status = 'Poor';
    style = { ...style, color: '#fa0' };
  } else if (cityAqi === 5) {
    status = 'Very Poor';
    style = { ...style, color: '#f00' };
  }

  return (
    <div className="ctd-preview">
      <h2>{cityName}</h2>
      <div>
        <span>Air Quality: </span>
        <span style={style}>{status}</span>
      </div>
      <div>
        <span>Quality Index: </span>
        <span style={style}>{cityAqi}</span>
      </div>
    </div>
  );
};

export default Countries;
