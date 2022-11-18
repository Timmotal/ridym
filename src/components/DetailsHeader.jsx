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
       
      
      </div>
    </div>
 
    {/* <div>DetailsHeader</div> */}
  </div>
  )};


