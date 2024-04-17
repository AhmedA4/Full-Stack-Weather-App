import Navbar from "./Navbar.jsx";
import SearchForm from "./SearchForm.jsx";
import Footer from "./Footer.jsx";
import backgroundImg from '../../public/assets/app-background/background-img-2.jpeg';

const HomePage = ({ searchText, setSearchText, favourites, setCurrentUser }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between vh-100" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <Navbar withoutSearchBar={true} favourites={favourites} setSearchText={setSearchText} setCurrentUser={setCurrentUser} />
          <SearchForm setSearchText={setSearchText} searchText={searchText} />
          <Footer />
      </div>
    </>
  )
}

export default HomePage
