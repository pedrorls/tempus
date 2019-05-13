import React from 'react';
import PropTypes from 'prop-types';


const seasonConfig = {
  Summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun',
    color: 'yellow',
  },
  Winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
    color: 'teal',
  },
};

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  return lat > 0 ? 'Winter' : 'Summer';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const data = seasonConfig[season];

  return (
    <>
      <h2>
        { season }
      </h2>
      <i className={`${data.iconName} ${data.color} icon big`} />
      <h1>{ data.text }</h1>
      <i className={`${data.iconName} ${data.color} icon massive`} />
    </>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number.isRequired,
};

export default SeasonDisplay;
