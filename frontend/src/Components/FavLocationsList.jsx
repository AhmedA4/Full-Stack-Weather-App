import FavLocation from "./FavLocation"

const FavLocationsList = ({ favourites, onRemoveCity, setSearchText }) => {
  return (
    <div className="container">
      <div className="row">
        {favourites.map((cityName, index) => (
          <div className="col-md-6 col-lg-4">
            <FavLocation key={index} cityName={cityName} favourites={favourites} onRemoveCity={onRemoveCity} setSearchText={setSearchText}/> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavLocationsList
