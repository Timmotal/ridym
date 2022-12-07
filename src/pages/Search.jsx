import { useParams } from "react-router-dom"; // we are getting the search term from the URl
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";