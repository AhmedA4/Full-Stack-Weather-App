import TodaysWeather from "./TodaysWeather"
import UpcomingWeather from "./UpcomingWeather"

const Weather = ({ currentDay, currentDayWeatherDesc, currentDayTemp, currentWeatherIcon, days }) => {
  return (
    <div>
      <TodaysWeather currentDay={currentDay} currentDayWeatherDesc={currentDayWeatherDesc} currentDayTemp={currentDayTemp} currentWeatherIcon={currentWeatherIcon}/>
      <UpcomingWeather days={days}/>
    </div>
  )
}

export default Weather
