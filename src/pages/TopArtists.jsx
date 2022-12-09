import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {

    const { data, isFetching, error } = useGetTopChartsQuery();

    if(isFetching) return <Loader title="loadin din din loading" />

    //if there's an error and country is not an empty string
    if(error) return <Error />;

    return (
    
    )
};


