import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {

  const artist = artistData?.artists[artistId].attributes; // so to reduce the long string and make it data simpler we did this

  return (
 


