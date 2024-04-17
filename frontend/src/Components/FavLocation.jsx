import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const FavLocation = ({ cityName, onRemoveCity, setSearchText }) => {

  const navigate = useNavigate();

  const handleCityClick = () => {
    setSearchText(cityName);
    navigate('/weather');
  };

  return (
    <div>
      <h4 className="text-center"><img src="../../public/bookmark-checked.png" alt="filled bookmark icon" onClick={() => onRemoveCity(cityName)} className="me-2" style={{height: "1em", cursor: "pointer"}}/><span onClick={handleCityClick} style={{cursor: "pointer"}}>
{cityName}</span></h4>
    </div>
  )
}

FavLocation.propTypes = {
    cityName: PropTypes.string
}

export default FavLocation
