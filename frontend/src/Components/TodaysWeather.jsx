import CurrentWeatherCard from "./CurrentWeatherCard"

const TodaysWeather = ({ currentDay, currentDayWeatherDesc, currentDayTemp, currentWeatherIcon }) => {

  function formatDate(dateString) {

    if (!currentDay) {
      return
    }
    
    // NOTE: I used GenAI to get a function to format the date as required

    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Options to control the output of the Intl.DateTimeFormat function
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Create an Intl.DateTimeFormat object for formatting the date
    const formatter = new Intl.DateTimeFormat('en-US', options);

    // Format the date
    const formattedDate = formatter.format(date);

    // Function to add ordinal suffix to day
    function addOrdinalSuffix(day) {
        const j = day % 10,
              k = day % 100;
        if (j === 1 && k !== 11) {
            return day + "st";
        }
        if (j === 2 && k !== 12) {
            return day + "nd";
        }
        if (j === 3 && k !== 13) {
            return day + "rd";
        }
        return day + "th";
    }

    // Replace the day number with its ordinal representation
    return formattedDate.replace(/\d+/, (match) => addOrdinalSuffix(match));
}

const formattedCurrentDay = formatDate(currentDay);

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <h2>Today's Weather:</h2>
      <h6 className="display-6">{formattedCurrentDay}</h6>
      <CurrentWeatherCard currentDayWeatherDesc={currentDayWeatherDesc} currentDayTemp={currentDayTemp} currentWeatherIcon={currentWeatherIcon}/>
    </div>
  )
}

export default TodaysWeather
