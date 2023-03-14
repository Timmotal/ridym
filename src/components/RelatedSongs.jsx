import SongBar from "./SongBar";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs
    </h1>

    <div className="mt- w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar // so how in the world does the related song work eh??
          key={`{song.key}-${artistId}`} 
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
  // <div>Loader</div>
);

export default RelatedSongs;
