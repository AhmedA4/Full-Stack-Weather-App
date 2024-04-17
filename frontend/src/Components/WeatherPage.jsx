import AddToFavs from "./AddToFavs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TellingYouAbout from "./TellingYouAbout";
import Weather from "./Weather";
import backgroundImg from '../../public/assets/app-background/background-img-2.jpeg';
import axios from "axios";

import { getWeatherService, updateState } from "../utils/services";
import { useState, useEffect } from "react";

const WeatherPage = ({ searchText, setSearchText, favourites, setFavourites, setCurrentUser }) => {

  const [ weatherData, setWeatherData ] = useState(null);
  const [ days, setDays ] = useState([]);
  const [ cityName, setCityName ] = useState('');
  const [ currentDay, setCurrentDay ] = useState('');
  const [ currentDayWeatherDesc, setCurrentDayWeatherDesc ] = useState('');
  const [ currentDayTemp, setCurrentDayTemp ] = useState();
  const [ currentWeatherIcon, setCurrentWeatherIcon ] = useState('');
  const [ locationIsSaved, setLocationIsSaved ] = useState(favourites ? favourites.includes(location) : false);


  const getWeatherData = async () => {
    try {
      const response = await getWeatherService(searchText)
      setWeatherData(response)
      // console.log(response)
    } 
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getWeatherData(searchText)
    // console.log(weatherData)
  }, [searchText])

  useEffect(() => {
    if (!weatherData) {
      // console.log('loading')
      return
    }
    if (weatherData) {
      setDays(updateState(weatherData))
      setCityName(weatherData.city.name)
      // console.log(days)
      console.log(cityName)
    }
  }, [weatherData])

  useEffect(() => {
    if (days && days.length > 0) {
      setCurrentDay(days[0].date)
      setCurrentDayWeatherDesc(days[0].weather_desc)
      setCurrentDayTemp(days[0].temp)
      setCurrentWeatherIcon(days[0].icon)
      // console.log(currentDayTemp)
      // console.log(currentDayWeatherDesc)
      // console.log(currentDay)
      console.log(days)
    }
  }, [days])
  
  // Previous method - before backend
  // function handleBookmark() {
  //   const newFavourites = favourites.includes(cityName) ?
  //       favourites.filter(city => city !== cityName) : // Remove the city name if already in favourites
  //       [...favourites, cityName]; // Add the city name if not in favourites
  
  //   localStorage.setItem("favourites", JSON.stringify(newFavourites)); // Update localStorage
  //   setFavourites(newFavourites); // Update state
  //   setLocationIsSaved(newFavourites.includes(cityName)); // Update whether location is saved
  // }
  
  async function handleBookmark() {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log("User is not logged in");
        return;
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    try {
        let response;
        if (locationIsSaved) {
            response = await axios.post('http://localhost:4000/user/favourites/remove', { location: cityName }, { headers });
        } else {
            response = await axios.post('http://localhost:4000/user/favourites/add', { location: cityName }, { headers });
        }
        const updatedFavourites = response.data.favourites;
        setFavourites(updatedFavourites);
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        setLocationIsSaved(!locationIsSaved);
    } catch (err) {
        console.log(err);
    }
}

useEffect(() => {
  setLocationIsSaved(favourites.includes(cityName))
  console.log(favourites);
}, [cityName, favourites]);


  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <Navbar searchText={searchText} setSearchText={setSearchText} favourites={favourites} setCurrentUser={setCurrentUser} />
          <TellingYouAbout description={cityName}/>
          {
          localStorage.getItem('token') && <AddToFavs // this ensures only logged in users can have favourites
            locationIsSaved={locationIsSaved} 
            handleBookmark={handleBookmark} 
          />
          }
          <Weather 
            currentDay={currentDay} 
            currentDayWeatherDesc={currentDayWeatherDesc} 
            currentDayTemp={currentDayTemp} 
            currentWeatherIcon={currentWeatherIcon} 
            days={days} />
          <Footer />
      </div>
    </>
  );
}

export default WeatherPage;