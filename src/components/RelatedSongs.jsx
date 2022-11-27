import SongBar from "./SongBar";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs
    </h1>

    <div className="mt- w-full flex flex-col">
      {data?.map((song, i) => (
      
      ))}
    </div>
  </div>
  // <div>Loader</div>
);


