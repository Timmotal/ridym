import { useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
// import { useContext } from 'react';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_8QGuZ613KX5HSpwyoEFhXayemfllj`)
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        // &ipAddress=8.8.8.8
        // at_8QGuZ613KX5HSpwyoEFhXayemfllj
    }, [country])

    // console.log(country);

    if(isFetching && loading) return <Loader title="blackpink in your area" />

    //if there's an error and country is not an empty string
    if(error && country) return <Error />;

    //now to be able to fetch songs around us, we have to know where we are, right?

    // so here i put useEffect and console gave me error saying i have changed the order of hooks 
    // but why does it now work bro?? 
    // useEffect(() => {
    //     axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_8QGuZ613KX5HSpwyoEFhXayemfllj`)
    //     .then((res) => setCountry(res?.data?.location?.country))
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    //     // &ipAddress=8.8.8.8
    //     // at_8QGuZ613KX5HSpwyoEFhXayemfllj
    // }, [country])

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
            I cant sleep i cant dream, without youuuu 
            <span className="font-black"> {country}</span>
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

export default AroundYou;
