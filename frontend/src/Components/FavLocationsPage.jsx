import FavLocationsList from "./FavLocationsList"
import Footer from "./Footer"
import Navbar from "./Navbar"
import RemoveFromFavs from "./RemoveFromFavs"
import TellingYouAbout from "./TellingYouAbout"
import backgroundImg from '../../public/assets/app-background/background-img-2.jpeg';
import axios from "axios"

const FavLocationsPage = ({ searchText, setSearchText, favourites, setFavourites, setCurrentUser }) => {

  async function removeBookmark(cityToRemove) {
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
        const response = await axios.post('http://localhost:4000/user/favourites/remove', 
        { location: cityToRemove }, 
        { headers });

        const updatedFavourites = response.data.favourites;
        setFavourites(updatedFavourites);
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    } catch (err) {
        console.error("Error removing bookmark:", err);
    }
}

  return (
    <div className="d-flex flex-column align-items-center justify-content-between vh-100 background-pic" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Navbar searchText={searchText} setSearchText={setSearchText} favourites={favourites} setCurrentUser={setCurrentUser} />
      <div>
        <TellingYouAbout description="Favourite locations" />
        <RemoveFromFavs />
      </div>
      <div className="mt-2">
         <FavLocationsList favourites={favourites} onRemoveCity={removeBookmark} setFavourites={setFavourites} setSearchText={setSearchText} />   
      </div>
      <Footer />
    </div>
  )
}

export default FavLocationsPage
