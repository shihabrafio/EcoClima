import React from 'react';
import './countries.css';

const Countries = (props) => {
  const { Name, Aqi } = props;
  let status = null;
  let statusClass = '';

  if (Aqi === 1) {
    status = 'Good';
    statusClass = 'quality-status-good';
  } else if (Aqi === 2) {
    status = 'Fair';
    statusClass = 'quality-status-fair';
  } else if (Aqi === 3) {
    status = 'Moderate';
    statusClass = 'quality-status-moderate';
  } else if (Aqi === 4) {
    status = 'Poor';
    statusClass = 'quality-status-poor';
  } else if (Aqi === 5) {
    status = 'Very Poor';
    statusClass = 'quality-status-very-poor';
  }

  return (
    <div className="ctd-preview">
      <h2>{Name}</h2>
      <div>
        <span>Quality of Air: </span>
        <span className={`quality-status ${statusClass}`}>{status}</span>
      </div>
      <div>
        <span>Quality Index: </span>
        <span className={`quality-status ${statusClass}`}>{Aqi}</span>
      </div>
    </div>
  );
};

export default Countries;
