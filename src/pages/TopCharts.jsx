// import { useState, useEffect} from "react"; we wont be needing the useStates, why so bro?
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
// import { useContext } from 'react';


