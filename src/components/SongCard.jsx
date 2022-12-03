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
     
        
        
          />
         </div>
         
         

    
        
    </div>

   
  </div>
  // <div>SongCard</div>
)
};

