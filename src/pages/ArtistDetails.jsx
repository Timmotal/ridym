import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //this gives us access to the id of the url
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

//SO MUCH TO BREAKDOWN AND UNDERSTAND HERE

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    // tutor says the song id will allow us to make another API call to fetch more details about the song
    const { activeSong, playPause, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId); 
    // alright, i want to see how we use "artistId" here, since we are not destructuring
     

    if(isFetchingArtistDetails) return // so wtf is isFecthing, gow does it work?
    <Loader title="i give them chance chance"/>;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />

                <RelatedSongs
                // key={i} 
                    data={Object.values(artistData?.songs)} // we simple want to format our songs in a proper way so that we can render songs from that specific artist
                    artistId={artistId}
                    isPlaying={isPlaying} //i didnt add this in the destructor useState
                    activeSong={activeSong}
                    //so why does he use handlePuaseClick and some times handlePause as a property title
                />
        </div>
        // <div>ArtistDetails</div>;
    )
};

export default ArtistDetails;
