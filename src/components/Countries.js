const Countries = (props) => {
  const { Name, Aqi } = props;
  let status = null;
  let style = { fontWeight: '800' };

  if (Aqi === 1) {
    status = 'Good';
    style = { ...style, color: '#0f0' };
  } else if (Aqi === 2) {
    status = 'Fair';
    style = { ...style, color: '#5affa5' };
  } else if (Aqi === 3) {
    status = 'Moderate';
    style = { ...style, color: '#ff0' };
  } else if (Aqi === 4) {
    status = 'Poor';
    style = { ...style, color: '#fa0' };
  } else if (Aqi === 5) {
    status = 'Very Poor';
    style = { ...style, color: '#f00' };
  }

  return (
    <div className="ctd-preview">
      <h2>{Name}</h2>
      <div>
        <span>Quality of Air: </span>
        <span style={style}>{status}</span>
      </div>
      <div>
        <span>Quality Index: </span>
        <span style={style}>{Aqi}</span>
      </div>
    </div>
  );
};

export default Countries;
