import { useRef } from "react";
import { useNavigate } from "react-router";

const SearchForm = ({ setSearchText }) => {

  const navigate = useNavigate();
  
  const searchRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(searchRef.current.value)
    navigate('/weather')
  }

  return (
  <>
    <div className="container">
     <h2 className="text-center">Tell me about...</h2>
        <div className="row col-6 offset-3">
          <form className="" role="search" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Search for a city..." ref={searchRef}/>
            <button className="btn btn-primary mt-3 col-4 offset-4">Search</button>
          </form>
        </div>
     </div>
  </>
  )
}

export default SearchForm
