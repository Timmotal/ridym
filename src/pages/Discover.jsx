import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
// import { useGetSongsByGenreQuery } from "../redux/services/shazamCore"; now we want to use the Genre
import {useGetSongsByGenreQuery } from "../redux/services/shazamCore";

// remember tutor says:
// we use "SELECT" when we want to select a piece of "STATE"
// "DISPATCH" when we want to modify the "STATE"
// with a SELECTOR we will be able to fetch that modified STATE

const Discover = () => {
const dispatch = useDispatch();







   
 
    
};


