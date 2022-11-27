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
   
  
  </form>
)};


