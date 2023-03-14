import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId].attributes; // so to reduce the long string and make it data simpler we did this

  return (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"/>

    <div className="absolute inset-0 flex items-center">
      {/* does the space between the question marks matter, tinker and figure */}
      <img src={artistId ? artist.artwork.url.replace('{w}', '500').replace('{h}', '500')
      : songData?.images?.coverart} 
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      alt="art" />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist.name : songData?.title}</p>
        { // this means if (there is) no artistId and "&&" means then render this code
        !artistId && ( //why render if no artistId
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2">
            {songData?.subtitle}
          </p>
          </Link>
        )}

          <p className="text-base text-gray-400 mt-2">
            {/* we use " ?. " so we make sure that the data exists if it doesn't then javascript returns undefined which is better than err */}
            {artistId ? artist.genreNames[0] : songData?.genres.primary}
          </p>
      </div>
    </div>
    
    <div className="w-full sm:h44 h-24"></div>
    {/* <div>DetailsHeader</div> */}
  </div>
  )};

export default DetailsHeader;
