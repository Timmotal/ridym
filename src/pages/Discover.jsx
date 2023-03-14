import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
// import { useGetSongsByGenreQuery } from "../redux/services/shazamCore"; now we want to use the Genre
import {useGetSongsByGenreQuery } from "../redux/services/shazamCore";

// remember tutor says:
// we use "SELECT" when we want to select a piece of "STATE"
// "DISPATCH" when we want to modify the "STATE"
// with a SELECTOR we will be able to fetch that modified STATE

const Discover = () => {
const dispatch = useDispatch();
const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

// feel the powerof redux once youload a genre once it doesnt get loaded a second TimeRanges, it saves in cache

// hey bro can you feel this, how we are making genre dynamic straight from "select and endpoint"
    const { data, isFetching, error} = useGetSongsByGenreQuery(genreListId || 'WORLDWIDE');
    console.log(data);

    // const genreTitle = 'Pop'; so we move this a couple of lines below, why so?

    if ( isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />

    const genreTitle = genres.find(({ value}) => value === genreListId)?.title;
    console.log(genres)
    return (
        <div className="flex flex-col">
            {/* he's using a tailwind extension for seeing what eachtail wind property does */}
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}
                    </h2>
                    <select 
                        onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                        value={genreListId || 'pop'}
                        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                            {genres.map((genre) => <option key={genre.value} value={genre.value}>
                                {genre.title}
                                </option>)}
                        </select>
            </div>      

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {/* here we are using a demo array, and we are pretending each num is a song */}
                {/* {[ 9, 8, 7, , 5, 4, 3, 2, 1, 0 ].map((song, i) => ( */}
                {/* we added question marl "?" incase data doesnt exist yet */}
                    {data?.map((song, i) => (
                    <SongCard 
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
};

export default Discover;
