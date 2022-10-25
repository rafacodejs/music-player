import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading Top Charts' />;

  if (error && country) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold font-poppins text-3xl text-left text-white mt-8 mb-10'>
        Top Artist
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
