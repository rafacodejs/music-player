import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backgrop-blur-sm animate-slide-up rounded-lg cursor-pointer'
      onClick={() => navigate(`/artist/${tracs?.artist[0].adamid}`)}
    >
      <img
        src={track?.images?.coverart}
        alt='artist'
        className='w-full h-56 rounded-lg'
      />
      <p className='mt-4 font-semibold font-poppins text-white truncate'>
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
