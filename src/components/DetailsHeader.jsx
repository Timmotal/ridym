import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId].attributes; // so to reduce the long string and make it data simpler we did this

  return (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"/>

    <div className="absolute inset-0 flex items-center">
      {/* does the space between the question marks matter, tinker and figure */}
     

    
    </div>
 
    {/* <div>DetailsHeader</div> */}
  </div>
  )};


