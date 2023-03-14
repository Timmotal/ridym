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
        <Link to={`/songs/${[0].key}`}>
        {/* [0].key */}
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>

        <Link to={`/artists/${song[0]?.artists[0].adamid}`}>
          <p className="text-base mt-1 text-white">
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
    dispatch(playPause(false));
  };

  const handlePlayClick = ( song, i ) => {
    dispatch(setActiveSong({ song, data, i }));
    
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        <Link to="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See More</p>
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {topPlays?.map((song, i) => (
          <TopChartCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(song, i)}
          />
        ))}
      </div>
      </div>
      
      <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        <Link to="/top-artists">
        <p className="text-gray-300 text-base cursor-pointer">See More</p>
        </Link>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {/* i've always wondered what in the world does the question mark "?" mean, alas i still dont understand */}
        {/* why cant it just be mapped directly without having to check if it exists first */}
        {topPlays?.map((song, i) => (
          <SwiperSlide 
            key={song.key}
            style={{width: '25%', height: 'auto' }}
            className="shadow-lg rounded-full animate-slideright"
            >
                <Link to={`/artists/${song[0]?.artists[0]?.adamid}`}>
                   <img src={song[0]?.images.background} alt="name" className="rounded-full w-full object-cover" />
                </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )

 // <div>TopPlay</div>
}
 

export default TopPlay;
