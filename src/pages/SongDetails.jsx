import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //this gives us access to the id of the url
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

//SO MUCH TO BREAKDOWN AND UNDERSTAND HERE

const SongDetails = () => {
    const { songid } = useParams();

 

 
};



