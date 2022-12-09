import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {

    const { data, isFetching, error } = useGetTopChartsQuery();

    if(isFetching) return 

    //if there's an error and country is not an empty string
  

    
};


