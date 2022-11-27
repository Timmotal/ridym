import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [ searchTerm, setSearchTerm ] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); // the default behaviour of browser is to reload the page when you submit a submittable element

    navigate(`/search/${searchTerm}`); 
  }
  
  return(
  <form
  onSubmit={handleSubmit}
   autoComplete="off" 
   className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
    search for any song
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input 
        name="search-field"
        autoComplete="off"
      />
    </div>
  </form>
)};


