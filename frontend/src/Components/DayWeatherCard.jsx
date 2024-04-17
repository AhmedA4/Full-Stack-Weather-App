const DayWeatherCard = ({ dayData }) => {
  // Assuming the date comes in the format "YYYY-MM-DD HH:MM:SS" and you want to display a more readable date.
  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  }; // NOTE: used Chat GPT to get this function to convert the date into just the day of the week
  
  // Convert temperature from Kelvin to Celsius
  const tempInCelsius = Math.round(dayData.temp - 273.15)
  
  return (
    <div className="d-flex mx-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{getDayOfWeek(dayData.date)}</h5>
          <img src={`../../public/assets/weather-icons/${dayData.icon}.svg`} alt="" style={{ width: '100%', alignContent: 'center' }}/>
          <h5 className="text-center">
              {tempInCelsius}ºC
          </h5>
          <h5 className="text-center">
              {dayData.weather_desc}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DayWeatherCard;
