import React from 'react';
// this code has been refactored by GPT4 as documented; old code can be found below in comments
// Utility function to convert temperature from Kelvin to Celsius
const convertKelvinToCelsius = kelvin => Math.round(kelvin - 273.15);

const CurrentWeatherCard = ({ currentDayWeatherDesc, currentDayTemp, currentWeatherIcon }) => {
  // Construct the image path dynamically based on the currentWeatherIcon prop
  const iconPath = `../../public/assets/weather-icons/${currentWeatherIcon}.svg`;
  const temperatureCelsius = convertKelvinToCelsius(currentDayTemp);

  return (
    <div className="d-flex">
      <img
        src={iconPath}
        alt="Current weather icon"
        style={{ height: '100%', width: '100%', alignContent: 'center' }}
      />
      <div className="d-flex flex-column justify-content-around py-5">
        <h6 className="display-6">{`${temperatureCelsius}ºC`}</h6>
        <h6 className="display-6">{currentDayWeatherDesc}</h6>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;


// const CurrentWeatherCard = ({ currentDayWeatherDesc, currentDayTemp, currentWeatherIcon }) => {

//   return (
//     <div className="d-flex">
//       <img src={`../../public/assets/weather-icons/${currentWeatherIcon}.svg`} alt="" style={{ height: '100%', width: '100%', alignContent: 'center' }} />
//       <div className="d-flex flex-column justify-content-around py-5">
//         <h6 className="display-6">{Math.round(currentDayTemp-273.15) +'ºC'}</h6>
//         <h6 className="display-6">{currentDayWeatherDesc}</h6>
//       </div>
//     </div>
//   )
// }

// export default CurrentWeatherCard
