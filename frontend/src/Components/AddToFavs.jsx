const uncheckedBookmark = "../../bookmark-unchecked.png";
const checkedBookmark = "../../bookmark-checked.png";

const AddToFavs = ({ locationIsSaved, handleBookmark }) => {

  return (
    <div>
        <h5 className="text-center">
          Click <img src={locationIsSaved ? checkedBookmark : uncheckedBookmark} alt="" className="" style={{height: "1em", cursor: "pointer"}} onClick={ handleBookmark } /> to add to favourites
        </h5>
    </div>
  )
}

export default AddToFavs
