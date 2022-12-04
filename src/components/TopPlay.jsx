import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, handlePauseClick, handlePlayClick, activeSong}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4C426E] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">
      {i + 1}.
    </h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg" />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>

        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1 text-white">
            {song?.subtitle}
          </p>
        </Link>

      </div>
    </div>

    {/* <PlayPause 
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePauseClick={handlePauseClick} --------i literally stared at this code for 4 hours
      handlePlayClick={handlePlayClick}    -------and  couldnt see the obvious staring back at me for like forever
    /> */}

<PlayPause 
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
  </div>
)



const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state)  => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth'});
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {

  };


 
 
 // <div>TopPlay</div>
}
 


