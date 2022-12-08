import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //this gives us access to the id of the url
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

//SO MUCH TO BREAKDOWN AND UNDERSTAND HERE

const SongDetails = () => {
    const { songid } = useParams();
    // tutor says the song id will allow us to make another API call to fetch more details about the song
    const dispatch = useDispatch(); // here we are initializing dispatch
    const { activeSong, playPause, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid }); //fell Adrian's (01:51:03)
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      // why are we not also passing the argument into the function here like we did in TopPlay
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

    console.log(songid)

    if(isFetchingSongDetails || isFetchingRelatedSongs) return // so wtf is isFecthing, gow does it work?
    <Loader title="I cant breathe"/>;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId=""  />
            

        </div>
        // <div>SongDetails</div>;
    )
};



