import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  );

  const genresTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title='Loading songs...' />;

  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left font-poppins mt-6'>
          Discover {genresTitle}
        </h2>
        <select
          name=''
          id=''
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className='relative top-4 bg-black text-gray-300 p-3 text-sm rounded-lg outline:none font-poppins font-medium cursor-pointer'
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8 '>
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
  );
};

export { Discover };

