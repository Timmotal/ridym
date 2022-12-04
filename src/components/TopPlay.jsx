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
   
   
  


  </div>
)






