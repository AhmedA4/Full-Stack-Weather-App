import DayWeatherCard from "./DayWeatherCard";

const UpcomingWeather = ({ days }) => {

  const addDayWeatherCard = days.slice(1, 5).map((day, index) => (
    <div className="col-6 col-md-3 my-2" key={index}>
      <DayWeatherCard key={index} dayData={day} />
    </div>
  ));

  return (
      <div className="container">
        <div className="row">
          {addDayWeatherCard}
        </div>
      </div>
  )
}

export default UpcomingWeather;