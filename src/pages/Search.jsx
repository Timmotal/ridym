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

    const songs = data?.tracks?.hits?.map((song) => song.track); // why did we do this, can you do it another way, more crass perhaps


    if(isFetching) return <Loader title="loadin din din loading" />

    //if there's an error and country is not an empty string
    if(error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
            we are at your behest and here is 
            <span className="font-black"> {searchTerm}'s </span>
             sacrifice
            </h2>
<div className="flex flex-wrap sm:justify-start justify-center gap-8">
    {songs?.map((song, i) => (
        <SongCard // feel the power and re-useability of components in react
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
        />
    ))}
</div>

        </div>
    )
};

export default Search;
