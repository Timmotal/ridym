import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';


const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = 'Test';

  const dispatch = useDispatch();

  const handlePauseClick = () => { // why are we not passing (song and i) params into here ?
   
  };

  // why are we not also passing the argument into the function here like we did in TopPlay
  

  // console.log(song)

 
};

