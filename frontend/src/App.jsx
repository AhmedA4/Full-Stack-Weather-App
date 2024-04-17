import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.bundle.min.js";
import FavLocationsPage from "./Components/FavLocationsPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import WeatherPage from "./Components/WeatherPage.jsx";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./Components/LoginPage.jsx";
import ChangePasswordPage from "./Components/ChangePasswordPage.jsx";

const App = () => {

    const [ searchText, setSearchText ] = useState(``);
    const [ isFavourited, setIsFavourited ] = useState(false);
    const [ favourites, setFavourites ] = useState(JSON.parse(localStorage.getItem('favourites')) || []);
    const [ currentUser, setCurrentUser ] = useState(() => JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        setFavourites(currentUser?.favourites || []);
    }, [currentUser]);

    return (
    <>
        <Routes>
            <Route path="/" element={ <LoginPage
                setCurrentUser={setCurrentUser}
                /> }
            />
            <Route path="/change-password" element={ <ChangePasswordPage
                setCurrentUser={setCurrentUser}
                /> }
            />
            <Route path="/home" element={ <HomePage 
                searchText={searchText} 
                setSearchText={setSearchText}
                favourites={favourites}
                setCurrentUser={setCurrentUser}
                /> } 
            />
            <Route path="/weather" element={ <WeatherPage 
                setSearchText={setSearchText}
                searchText={searchText}
                favourites={favourites}
                setFavourites={setFavourites}
                isFavourited={isFavourited}
                setIsFavourited={setIsFavourited}
                setCurrentUser={setCurrentUser}
             /> } 
             />
            <Route path="/favourites" element={ <FavLocationsPage
                searchText={searchText}
                setSearchText={setSearchText}
                favourites={favourites}
                setFavourites={setFavourites}
                setCurrentUser={setCurrentUser}
            /> } />
        </Routes>
    </>
  );
};

export default App;
