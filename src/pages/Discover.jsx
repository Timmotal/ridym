import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
// import { useGetSongsByGenreQuery } from "../redux/services/shazamCore"; now we want to use the Genre



