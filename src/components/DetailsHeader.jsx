import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artist[artistId]?.attributes;

  return (
    <div className='relative w-full flex flex-col'>
      <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-32 rounded-lg' />
      <div className='absolute inset-0 flex items-center'>
        <img
          src={
            artistId
              ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
          }
          alt='art'
          className='sm:w-40 w-24 sm:h-40 h-24 ml-4 rounded-full object-cover border-2 shadow-xl shadow-black'
        />

        <div className='ml-5'>
          <p className='text-white sm:text-3xl font-medium font-poppins text-xl'>
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className='text-base text-gray-400 font-poppins'>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className='text-base text-gray-400 font-poppins'>
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
