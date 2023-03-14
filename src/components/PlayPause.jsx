import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
// why simple handlePause and not handlePauseClick
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => // if i had traced the props maybe i would have figured
                      ( isPlaying && activeSong?. title === song.title ? // if we are playing and active song is equal to a particular song
                        ( <FaPauseCircle
                          size={35}
                          className="text-gray-300"
                          onClick={handlePause} 
                          /> 
                          ) : (
                             <FaPlayCircle 
                             size={35}
                             className="text-gray-300"
                             onClick={handlePlay} 
                             /> 
                             ))
  // <div>Loader</div>
;

export default PlayPause;