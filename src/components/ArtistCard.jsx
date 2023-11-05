import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div 
    className="flex flex-col w p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate slideup rounded-lg cursor-pointer"
    onClick={() => navigate(`/artists/${track[0]?.artists[0].adamid}`)}
   
    >
      <img src={track[0]?.images?.coverart} alt="" className="w-full h-56 rounded-lg" />
      <p className="mt-4 text-white font-semibold text-lg truncate">
        {track[0]?.subtitle}
      </p>
    </div>
  )
};

export default ArtistCard;
