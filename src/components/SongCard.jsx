import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';


const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = 'Test';

  const dispatch = useDispatch();

  const handlePauseClick = () => { // why are we not passing (song and i) params into here ?
    dispatch(playPause(false));
  };

  // why are we not also passing the argument into the function here like we did in TopPlay
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // console.log(song)

  return (
  <div className="flex flex-col p-4 bg-white/5 w-[250px] bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
    <div 
        className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
         ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause 
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
         </div>
          {/* now i will go check wether the tutor added "?" before the coverart
          i see what the tutoe mentioned about adding "?" so you get undefined instead of errors
          so of the nigerians songs had no images and then my app ran into problems */}

          {/* and yes the tutor definitlely added "?" but some how i missed it, fk us bro hehe */}
         <img src={song.images?.coverart} alt="song_img" />
    </div>

    <div className="mt-4 flex flex-col">
      <p className='font-semibold text-lg text-white truncate'>
        <Link to={`/songs/${song?.key}`}>
        {song.title}
        </Link>
        </p>
      <p className='text-sm truncate text-gray-300 mt-1'>
        <Link to={song.artists ? `/artists/${song?.artists[0].adamid}` : '/top-artists'}>
        {song.subtitle}
        </Link>
        </p>
    </div>
  </div>
  // <div>SongCard</div>
)
};

export default SongCard;
