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
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">
                    Lyrics:
                    </h2>

                    <div className="mt-5">
                        {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => (
                            <p className="text-gray-400 text-base my-1">{line}</p>
                        )) : <p className="text-gray-400 text-base my-1">No lyrics found for this song, enjoy your breath </p>}
                    </div>
                </div>

                <RelatedSongs
                // key={i} 
                    data={data}
                    isPlaying={isPlaying} //i didnt add this in the destructor useState
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                    //so why does he use handlePuaseClick and some times handlePause as a property title
                />
        </div>
        // <div>SongDetails</div>;
    )
};

export default SongDetails;
