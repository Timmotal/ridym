import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //this gives us access to the id of the url
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

//SO MUCH TO BREAKDOWN AND UNDERSTAND HERE

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    // tutor says the song id will allow us to make another API call to fetch more details about the song
    const { activeSong, playPause, isPlaying } = useSelector((state) => state.player);
 




   

