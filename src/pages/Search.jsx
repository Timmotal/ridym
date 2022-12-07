import { useParams } from "react-router-dom"; // we are getting the search term from the URl
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";
// import { useContext } from 'react';

const Search = () => {
  const { searchTerm } = useParams(); // to get the search term from the URL, broo dig it in
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    // tutor says we can see how simple this is because we were using redux toolkit 
    // thereby allowing us to make those calls and wrote proper reuseable components
    const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

    
};


