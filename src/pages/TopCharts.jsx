// import { useState, useEffect} from "react"; we wont be needing the useStates, why so bro?
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
// import { useContext } from 'react';

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    // tutor says we can see how simple this is because we were using redux toolkit 
    // thereby allowing us to make those calls and wrote proper reuseable components
    const { data, isFetching, error } = useGetTopChartsQuery();


    if(isFetching) return <Loader title="loadin din din loading" />

    //if there's an error and country is not an empty string
    if(error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
            Discover The Treasure laying in the labryinth 
            </h2>
<div className="flex flex-wrap sm:justify-start justify-center gap-8">
    {data?.map((song, i) => (
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

export default TopCharts;
