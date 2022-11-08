import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div 
    className="flex flex-col w p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate slideup rounded-lg cursor-pointer"
    onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}

    >
   
  )
};
\\
