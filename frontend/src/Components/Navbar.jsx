import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navbar = ({setSearchText, withoutSearchBar, favourites, setCurrentUser}) => {

    const searchRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchText(searchRef.current.value);
        navigate('/weather')
    }

    const handleFavouriteClick = (cityName) => {
        setSearchText(cityName);
        navigate('/weather'); 
    };

    const isLoggedIn = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('favourites');

        setCurrentUser(null);

        navigate('/')
    };

    const handleChangePassword = () => {
        navigate('/change-password');
    };

  return (
    <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3 w-100">
                <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand">
                        <img src="../../public/assets/app-logo/Weatherman_Logo.jpg" alt="WeatherMan Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                    </NavLink>
                    <button 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span> 
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="d-flex navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        {
                            isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <button onClick={handleChangePassword} className="nav-link btn btn-dark">Change Password</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logout} className="nav-link btn btn-dark">Log Out</button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Log In / Sign Up</NavLink>
                                </li> )
                        }
                        {favourites && favourites.length > 0 && (
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to={'/weather'} id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                        My Saved Locations
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {favourites.map((city, index) => (
                                            <li key={index}>
                                                <NavLink className="dropdown-item" to={'/weather'} onClick={() => handleFavouriteClick(city)}>{city}</NavLink>
                                            </li>
                                        ))}
                                            <li>
                                                <NavLink className="dropdown-item" to={'/favourites'}>All saved locations</NavLink>
                                            </li>
                                    </ul>
                                </li>
                            )}
                        </ul>
                    <form className={!withoutSearchBar ? "d-flex ms-auto" : `d-none`} role="search" onSubmit={handleSubmit}>
                        <input type="text" className="form-control" placeholder="Location name..." ref={searchRef}/>
                        <button className="btn btn-primary ms-2">Search</button>
                    </form>
                </div>
                </div>
            </nav>
    </>
  )
};


export default Navbar
